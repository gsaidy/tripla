import { FC } from 'react';
import { Form } from 'antd';

import BasicInfo from '../molecules/BasicInfo';

const TripForm: FC = () => (
  <Form labelCol={{ span: 6 }}>
    <BasicInfo />
  </Form>
);

export default TripForm;
