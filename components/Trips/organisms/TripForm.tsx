import { FC, ReactNode, createContext } from 'react';
import { Form } from 'antd';

import BasicInfo from '../molecules/BasicInfo';
import Trip from 'interfaces/trip';
import FormMode from 'enums/formMode';

export const TripFormContext = createContext<{
  formMode: FormMode;
}>({
  formMode: FormMode.Create,
});

const TripForm: FC<{
  formMode: FormMode;
  tripInitialData?: Trip;
  children?: ReactNode;
  onSubmit: (trip: Trip) => void;
}> = ({ formMode, tripInitialData, children, onSubmit }) => (
  <TripFormContext.Provider value={{ formMode }}>
    <Form
      className="space-y-4"
      initialValues={tripInitialData}
      labelCol={{ span: 6 }}
      requiredMark={formMode !== FormMode.View}
      onFinish={onSubmit}
    >
      <BasicInfo />
      {children}
    </Form>
  </TripFormContext.Provider>
);

export default TripForm;
