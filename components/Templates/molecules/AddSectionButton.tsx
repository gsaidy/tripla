import { FC } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddSectionButton: FC<{ addSection: () => void }> = ({ addSection }) => (
  <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
    <div className="md:grid md:grid-cols-6">
      <div className="md:col-start-2 md:col-span-5">
        <Button
          className="flex justify-center items-center"
          type="dashed"
          size="large"
          block
          icon={<PlusOutlined />}
          onClick={addSection}
        >
          Add Section
        </Button>
      </div>
    </div>
  </div>
);

export default AddSectionButton;
