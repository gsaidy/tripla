import { FC } from 'react';
import { Form, Switch } from 'antd';

const AttributeRequired: FC<{ parentName: number }> = ({ parentName }) => (
  <div className="col-span-6 sm:col-span-4 lg:col-span-3 -mt-3 -mb-6 xs:my-0">
    <Form.Item label="Required" name={[parentName, 'attributeRequired']} valuePropName="checked">
      <Switch className="-mt-5 xs:mt-0" />
    </Form.Item>
  </div>
);

export default AttributeRequired;
