import { FC } from 'react';
import { Form } from 'antd';

import BasicInfo from '../molecules/BasicInfo';
import TemplateSection from '../molecules/TemplateSection';
import AddSectionButton from '../molecules/AddSectionButton';

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
                removeSection={() => remove(field.name)}
              />
            ))}
            <AddSectionButton addSection={add} />
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default TemplateForm;
