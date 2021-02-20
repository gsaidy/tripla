import { FC, ReactNode, createContext, useState } from 'react';
import { Form } from 'antd';

import BasicInfo from '../molecules/BasicInfo';
import TemplateSection from '../molecules/TemplateSection';
import AddSectionButton from '../molecules/AddSectionButton';
import ErrorList from '../molecules/ErrorList';
import Template from 'interfaces/template';
import { validateAtLeastOneAttributeAndOption } from 'utils/validators';
import FormMode from 'enums/formMode';

export const TemplateFormContext = createContext<{ formMode: FormMode }>({
  formMode: FormMode.Create,
});

const TemplateForm: FC<{
  formMode: FormMode;
  templateInitialData?: Template;
  children?: ReactNode;
  onSubmit: (template: Template) => void;
}> = ({ formMode, templateInitialData, children, onSubmit }) => {
  const [errors, setErrors] = useState<string[]>([]);

  const layout = {
    labelCol: { span: 6 },
  };

  const onFinish = async (template: Template) => {
    const validationErrors = validateAtLeastOneAttributeAndOption(template);
    setErrors(validateAtLeastOneAttributeAndOption(template));
    if (validationErrors.length === 0) {
      onSubmit(template);
    }
  };

  return (
    <TemplateFormContext.Provider value={{ formMode }}>
      <Form
        {...layout}
        initialValues={templateInitialData}
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
