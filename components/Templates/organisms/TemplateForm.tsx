import { FC } from 'react';
import { Form } from 'antd';

import BasicInfo from '../molecules/BasicInfo';

const TemplateForm: FC = () => {
  const layout = {
    labelCol: { span: 6 },
  };

  return (
    <Form {...layout}>
      <BasicInfo />
    </Form>
  );
};

export default TemplateForm;
