import { FC } from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import EntityType from 'enums/entityType';
import { capitalize } from 'utils/helpers';

const BackToList: FC<{ href: string; entity: EntityType }> = ({ href, entity }) => {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6">
      <div className="border-b py-4">
        <Button
          className="rounded flex items-center"
          icon={<ArrowLeftOutlined />}
          onClick={() => router.push(href)}
        >
          Back to {capitalize(entity)} List
        </Button>
      </div>
    </div>
  );
};

export default BackToList;
