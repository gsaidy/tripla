import { FC } from 'react';
import { Form, Input, Modal } from 'antd';

import Attribute from 'interfaces/attribute';

const TripSectionModal: FC<{ visible: boolean; fields: Attribute[]; onCancel: () => void }> = ({
  visible,
  fields,
  onCancel,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Add Item"
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      onOk={() => {
        form.validateFields().then(() => {
          form.resetFields();
        });
      }}
    >
      <Form form={form} className="section-modal-form space-y-5" layout="vertical">
        {fields.map(({ id, name, required }) => (
          <Form.Item
            key={id}
            name={name}
            label={name}
            rules={[{ required, message: `Please select a ${name}.` }]}
          >
            <Input />
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};

export default TripSectionModal;
