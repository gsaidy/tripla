import { FC } from 'react';
import { Button, Divider } from 'antd';
import { useRouter } from 'next/router';

const TemplateTableHeader: FC<{ title: string; showCreateButton: boolean }> = ({
  title,
  showCreateButton,
}) => {
  const router = useRouter();

  return (
    <div className="relative">
      {showCreateButton && (
        <Button className="float-right" onClick={() => router.push('/templates/create')}>
          Create
        </Button>
      )}
      <Divider orientation="left">{title}</Divider>
    </div>
  );
};

export default TemplateTableHeader;
