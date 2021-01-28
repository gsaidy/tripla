import { FC, useState } from 'react';
import { Form } from 'antd';

import BasicInfo from '../molecules/BasicInfo';
import TemplateSection from '../molecules/TemplateSection';
import AddSectionButton from '../molecules/AddSectionButton';

const TemplateForm: FC = () => {
  const [sections, setSections] = useState([]);
  const layout = {
    labelCol: { span: 6 },
  };

  const addSection = () => {
    setSections([...sections, `Section ${sections.length + 1}`]);
  };

  return (
    <Form {...layout}>
      <BasicInfo />
      {sections.map((section) => (
        <TemplateSection key={section} title={section} />
      ))}
      <AddSectionButton addSection={addSection} />
    </Form>
  );
};

export default TemplateForm;
