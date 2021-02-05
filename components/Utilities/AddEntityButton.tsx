import { FC } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddEntityButton: FC<{ entity: string; add: () => void }> = ({ entity, add }) => (
  <Button
    className="flex justify-center items-center"
    type="dashed"
    size="large"
    block
    icon={<PlusOutlined />}
    onClick={add}
  >
    Add {entity}
  </Button>
);

export default AddEntityButton;
