import { FC } from 'react';
import { Button, Divider } from 'antd';
import { useRouter } from 'next/router';

const EntityTableHeader: FC<{ title: string; createHref: string; showCreateButton: boolean }> = ({
  title,
  createHref,
  showCreateButton,
}) => {
  const router = useRouter();

  return (
    <div className="relative">
      {showCreateButton && (
        <Button className="float-right" onClick={() => router.push(createHref)}>
          Create
        </Button>
      )}
      <Divider orientation="left">{title}</Divider>
    </div>
  );
};

export default EntityTableHeader;
