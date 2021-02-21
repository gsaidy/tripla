import { FC } from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const BackToTemplateList: FC = () => {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6">
      <div className="border-b py-4">
        <Button
          className="rounded flex items-center"
          icon={<ArrowLeftOutlined />}
          onClick={() => router.push('/templates')}
        >
          Back to Template List
        </Button>
      </div>
    </div>
  );
};

export default BackToTemplateList;
