import { FC, useState } from 'react';
import { Form } from 'antd';

import BasicInfo from '../molecules/BasicInfo';
import TemplateSection from '../molecules/TemplateSection';
import AddSectionButton from '../molecules/AddSectionButton';
import { generateRandomString } from '../../../utils/string';

const TemplateForm: FC = () => {
  const [sections, setSections] = useState([]);
  const layout = {
    labelCol: { span: 6 },
  };

  const addSection = () => {
    setSections([...sections, generateRandomString()]);
  };

  const removeSection = (sectionToRemove: string) => {
    setSections(sections.filter((section) => section !== sectionToRemove));
  };

  return (
    <Form {...layout}>
      <BasicInfo />
      {sections.map((sectionId, index) => (
        <TemplateSection
          key={sectionId}
          index={index}
          removeSection={() => removeSection(sectionId)}
        />
      ))}
      <AddSectionButton addSection={addSection} />
    </Form>
  );
};

export default TemplateForm;
