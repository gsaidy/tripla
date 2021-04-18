import { FC } from 'react';
import { Form, Modal } from 'antd';

import Attribute from 'interfaces/attribute';
import CancelButton from './molecules/CancelButton';
import SubmitButton from './molecules/SubmitButton';
import TripSectionModalField from './molecules/TripSectionModalField';

const TripSectionModal: FC<{ visible: boolean; fields: Attribute[]; hide: () => void }> = ({
  visible,
  fields,
  hide,
}) => {
  const [form] = Form.useForm();

  const onCancel = () => {
    form.resetFields();
    hide();
  };

  const onSubmit = () => {
    form
      .validateFields()
      .then(() => {
        form.resetFields();
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
      onOk={onSubmit}
      footer={[
        <CancelButton key="cancel" onCancel={onCancel} />,
        <SubmitButton key="addFirst" label="Add First" onSubmit={onSubmit} />,
        <SubmitButton key="addLast" label="Add Last" onSubmit={onSubmit} />,
      ]}
    >
      <Form form={form} className="section-modal-form space-y-5" layout="vertical">
        {fields.map(({ id, name, required }) => (
          <TripSectionModalField key={id} name={name} required={required} />
        ))}
      </Form>
    </Modal>
  );
};

export default TripSectionModal;
