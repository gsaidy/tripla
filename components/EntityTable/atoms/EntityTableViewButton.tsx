import { FC } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';

const EntityTableViewButton: FC<{ href: string }> = ({ href }) => {
  const router = useRouter();

  return (
    <Button type="primary" onClick={() => router.push(href)}>
      View
    </Button>
  );
};

export default EntityTableViewButton;
