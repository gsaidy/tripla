import { FC, ReactNode, createContext } from 'react';
import { Form } from 'antd';
import { NamePath } from 'antd/lib/form/interface';

import BasicInfo from '../molecules/BasicInfo';
import Trip from 'interfaces/trip';
import FormMode from 'enums/formMode';

export const TripFormContext = createContext<{
  formMode: FormMode;
  getFieldValue: (name: NamePath) => unknown;
  resetFields: (fields?: NamePath[]) => void;
}>({
  formMode: FormMode.Create,
  getFieldValue: (name: NamePath) => name,
  resetFields: (fields?: NamePath[]) => fields,
});

const TripForm: FC<{
  formMode: FormMode;
  tripInitialData?: Trip;
  children?: ReactNode;
  onSubmit: (trip: Trip) => void;
}> = ({ formMode, tripInitialData, children, onSubmit }) => {
  const [form] = Form.useForm();

  return (
    <TripFormContext.Provider
      value={{ formMode, getFieldValue: form.getFieldValue, resetFields: form.resetFields }}
    >
      <Form
        className="space-y-4"
        form={form}
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
};

export default TripForm;
