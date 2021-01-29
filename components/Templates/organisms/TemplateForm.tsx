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

  const removeSection = (sectionToRemove: string) => {
    setSections(sections.filter((section) => section !== sectionToRemove));
  };

  return (
    <Form {...layout}>
      <BasicInfo />
      {sections.map((section) => (
        <TemplateSection
          key={section}
          section={section}
          removeSection={() => removeSection(section)}
        />
      ))}
      <AddSectionButton addSection={addSection} />
    </Form>
  );
};

export default TemplateForm;
