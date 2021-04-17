import { FC } from 'react';
import { Form, Input, Modal, Button } from 'antd';

import Attribute from 'interfaces/attribute';

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
    form.validateFields().then(() => {
      form.resetFields();
    });
  };

  return (
    <Modal
      visible={visible}
      title="Add Item"
      onCancel={onCancel}
      onOk={onSubmit}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="addFirst" type="primary" onClick={onSubmit}>
          Add First
        </Button>,
        <Button key="addLast" type="primary" onClick={onSubmit}>
          Add Last
        </Button>,
      ]}
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
