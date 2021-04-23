import { FC } from 'react';
import { Form, Modal } from 'antd';

import Attribute from 'interfaces/attribute';
import CancelButton from './molecules/CancelButton';
import SubmitButton from './molecules/SubmitButton';
import TripSectionModalField from './molecules/TripSectionModalField';
import RowPlacement from 'enums/rowPlacement';

const TripSectionModal: FC<{
  visible: boolean;
  fields: Attribute[];
  hide: () => void;
  onAdd: (placement: RowPlacement, row: Record<string, unknown>) => void;
}> = ({ visible, fields, hide, onAdd }) => {
  const [form] = Form.useForm();

  const onCancel = () => {
    form.resetFields();
    hide();
  };

  const onSubmit = (placement: RowPlacement) => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
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
      onCancel={onCancel}
      onOk={() => onSubmit(RowPlacement.Last)}
      footer={[
        <CancelButton key="cancel" onCancel={onCancel} />,
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
