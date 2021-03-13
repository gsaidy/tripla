import { FC, ReactNode } from 'react';
import { Form } from 'antd';

import BasicInfo from '../molecules/BasicInfo';

const TripForm: FC<{ children?: ReactNode }> = ({ children }) => (
  <Form className="space-y-4" labelCol={{ span: 6 }}>
    <BasicInfo />
    {children}
  </Form>
);

export default TripForm;
