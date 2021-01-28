import { FC } from 'react';
import { Form } from 'antd';

import BasicInfo from '../molecules/BasicInfo';
import AddSectionButton from '../molecules/AddSectionButton';

const TemplateForm: FC = () => {
  const layout = {
    labelCol: { span: 6 },
  };

  return (
    <Form {...layout}>
      <BasicInfo />
      <AddSectionButton />
    </Form>
  );
};

export default TemplateForm;
