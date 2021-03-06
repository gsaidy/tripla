import { FC, ReactNode, createContext, useState } from 'react';
import { Form } from 'antd';
import { NamePath } from 'antd/lib/form/interface';

import BasicInfo from '../molecules/BasicInfo';
import TemplateSection from '../molecules/TemplateSection';
import AddSectionButton from '../molecules/AddSectionButton';
import ErrorList from '../molecules/ErrorList';
import Template from 'interfaces/template';
import { validateAtLeastOneAttributeAndOption } from 'utils/validators';
import FormMode from 'enums/formMode';
import BackToList from '../../Utilities/BackToList';
import EntityType from 'enums/entityType';

export const TemplateFormContext = createContext<{
  formMode: FormMode;
  getFieldValue: (name: NamePath) => unknown;
  setFieldsValue: (values: unknown) => void;
  resetFields: (fields?: NamePath[]) => void;
}>({
  formMode: FormMode.Create,
  getFieldValue: (name: NamePath) => name,
  setFieldsValue: (values: unknown) => values,
  resetFields: (fields?: NamePath[]) => fields,
});

const TemplateForm: FC<{
  formMode: FormMode;
  templateInitialData?: Template;
  children?: ReactNode;
  onSubmit: (template: Template) => void;
}> = ({ formMode, templateInitialData, children, onSubmit }) => {
  const [form] = Form.useForm();
  const [errors, setErrors] = useState<string[]>([]);

  const onFinish = (template: Template) => {
    const validationErrors = validateAtLeastOneAttributeAndOption(template);
    setErrors(validateAtLeastOneAttributeAndOption(template));
    if (validationErrors.length === 0) {
      onSubmit(template);
    }
  };

  return (
    <TemplateFormContext.Provider
      value={{
        formMode,
        getFieldValue: form.getFieldValue,
        setFieldsValue: form.setFieldsValue,
        resetFields: form.resetFields,
      }}
    >
      {formMode === FormMode.View && <BackToList href="/templates" entity={EntityType.Template} />}
      <Form
        form={form}
        initialValues={templateInitialData}
        labelCol={{ span: 6 }}
        requiredMark={formMode !== FormMode.View}
        onFinish={onFinish}
      >
        <BasicInfo user={templateInitialData ? templateInitialData.user : undefined} />
        <Form.List name="sections">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <TemplateSection
                  key={field.key}
                  index={index}
                  name={field.name}
                  removeSection={() => remove(field.name)}
                />
              ))}
              <AddSectionButton addSection={() => add({ order: fields.length + 1 })} />
            </>
          )}
        </Form.List>
        {children}
        {errors.length > 0 && <ErrorList errors={errors} onClose={() => setErrors([])} />}
      </Form>
    </TemplateFormContext.Provider>
  );
};

export default TemplateForm;
