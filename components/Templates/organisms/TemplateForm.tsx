import { FC } from 'react';
import { Form } from 'antd';

import BasicInfo from '../molecules/BasicInfo';
import TemplateSection from '../molecules/TemplateSection';
import AddSectionButton from '../molecules/AddSectionButton';
import CreateTemplateButton from '../molecules/CreateTemplateButton';

const TemplateForm: FC = () => {
  const layout = {
    labelCol: { span: 6 },
  };

  return (
    <Form {...layout}>
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
            <AddSectionButton addSection={() => add()} />
          </>
        )}
      </Form.List>
      <CreateTemplateButton />
    </Form>
  );
};

export default TemplateForm;
