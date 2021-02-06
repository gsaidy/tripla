import { FC } from 'react';
import { Button } from 'antd';

const CreateTemplateButton: FC = () => (
  <div className="max-w-7xl mx-auto pb-4 sm:px-4 lg:px-6">
    <div className="md:grid md:grid-cols-6">
      <div className="md:col-start-2 md:col-span-5 text-center md:text-left">
        <Button className="rounded" type="primary" htmlType="submit" size="large">
          Create Template
        </Button>
      </div>
    </div>
  </div>
);

export default CreateTemplateButton;
