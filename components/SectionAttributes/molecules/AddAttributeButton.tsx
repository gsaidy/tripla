import { FC } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddAttributeButton: FC<{ addAttribute: () => void }> = ({ addAttribute }) => (
  <Button
    className="flex justify-center items-center"
    type="dashed"
    size="large"
    block
    icon={<PlusOutlined />}
    onClick={addAttribute}
  >
    Add Attribute
  </Button>
);

export default AddAttributeButton;
