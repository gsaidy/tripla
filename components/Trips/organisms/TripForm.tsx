import { FC, ReactNode } from 'react';
import { Form } from 'antd';

import BasicInfo from '../molecules/BasicInfo';
import Trip from 'interfaces/trip';

const TripForm: FC<{ children?: ReactNode; onSubmit: (trip: Trip) => void }> = ({
  children,
  onSubmit,
}) => (
  <Form className="space-y-4" labelCol={{ span: 6 }} onFinish={onSubmit}>
    <BasicInfo />
    {children}
  </Form>
);

export default TripForm;
