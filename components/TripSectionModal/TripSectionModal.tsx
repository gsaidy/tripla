import { FC, useEffect } from 'react';
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
  onEdit: (row: Record<string, unknown>) => void;
}> = ({ visible, mode, fields, initialValues, hide, onAdd, onEdit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (form && visible) {
      if (mode === FormMode.Edit) {
        form.setFieldsValue(initialValues);
      } else {
        form.resetFields();
      }
    }
  }, [visible, form, initialValues, mode]);

  const onSubmit = (placement?: RowPlacement) => {
    form
      .validateFields()
      .then((values) => {
        if (mode === FormMode.Create) {
          onAdd(placement as RowPlacement, values);
        } else {
          onEdit(values);
        }
        hide();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const footer = [<CancelButton key="cancel" onCancel={hide} />];

  if (mode === FormMode.Create) {
    footer.push(
      <SubmitButton
        key="addFirst"
        label="Add First"
        onSubmit={() => onSubmit(RowPlacement.First)}
      />
    );
    footer.push(
      <SubmitButton key="addLast" label="Add Last" onSubmit={() => onSubmit(RowPlacement.Last)} />
    );
  } else {
    footer.push(<SubmitButton key="save" label="Save" onSubmit={onSubmit} />);
  }

  return (
    <Modal
      visible={visible}
      title="Add Item"
      onCancel={hide}
      onOk={() => onSubmit(RowPlacement.Last)}
      footer={footer}
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
