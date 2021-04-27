import { FC } from 'react';
import { Form, Modal } from 'antd';

import Attribute from 'interfaces/attribute';
import CancelButton from './molecules/CancelButton';
import SubmitButton from './molecules/SubmitButton';
import TripSectionModalField from './molecules/TripSectionModalField';
import RowPlacement from 'enums/rowPlacement';
import FormMode from 'enums/formMode';

const TripSectionModal: FC<{
  visible: boolean;
  mode: FormMode;
  fields: Attribute[];
  initialValues: Record<string, unknown> | undefined;
  hide: () => void;
  onAdd: (placement: RowPlacement, row: Record<string, unknown>) => void;
}> = ({ visible, mode, fields, initialValues, hide, onAdd }) => {
  const [form] = Form.useForm();

  if (mode === FormMode.Edit) {
    form.setFieldsValue(initialValues);
  } else {
    form.resetFields();
  }

  const onSubmit = (placement: RowPlacement) => {
    form
      .validateFields()
      .then((values) => {
        onAdd(placement, values);
        hide();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      visible={visible}
      title="Add Item"
      onCancel={hide}
      onOk={() => onSubmit(RowPlacement.Last)}
      footer={[
        <CancelButton key="cancel" onCancel={hide} />,
        <SubmitButton
          key="addFirst"
          label="Add First"
          onSubmit={() => onSubmit(RowPlacement.First)}
        />,
        <SubmitButton
          key="addLast"
          label="Add Last"
          onSubmit={() => onSubmit(RowPlacement.Last)}
        />,
      ]}
    >
      <Form form={form} className="section-modal-form space-y-5" layout="vertical">
        {fields.map(({ id, name, required, edit, options }) => (
          <TripSectionModalField
            key={id}
            name={name}
            required={required}
            type={edit}
            options={options}
          />
        ))}
      </Form>
    </Modal>
  );
};

export default TripSectionModal;
