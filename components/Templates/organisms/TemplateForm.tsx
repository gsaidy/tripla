import { FC } from 'react';
import { Form } from 'antd';

import BasicInfo from '../molecules/BasicInfo';
import TemplateSection from '../molecules/TemplateSection';
import AddSectionButton from '../molecules/AddSectionButton';
import CreateTemplateButton from '../molecules/CreateTemplateButton';
import Template from 'interfaces/template';

const TemplateForm: FC<{ onSubmit: (template: Template) => void }> = ({ onSubmit }) => {
  const layout = {
    labelCol: { span: 6 },
  };

  const onFinish = (values: Template) => {
    onSubmit(values);
  };

  return (
    <Form {...layout} onFinish={onFinish}>
      <BasicInfo />
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
      <CreateTemplateButton />
    </Form>
  );
};

export default TemplateForm;
