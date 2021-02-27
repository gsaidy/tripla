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
        <Button
          type="primary"
          className="float-right"
          onClick={() => router.push('/templates/create')}
        >
          Create
        </Button>
      )}
      <Divider className="pb-3" orientation="left">
        {title}
      </Divider>
    </div>
  );
};

export default TemplateTableHeader;
