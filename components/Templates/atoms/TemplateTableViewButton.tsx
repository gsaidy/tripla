import { FC } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';

const TemplateTableViewButton: FC<{ id: number }> = ({ id }) => {
  const router = useRouter();

  return (
    <Button type="primary" onClick={() => router.push(`/templates/${id}`)}>
      View
    </Button>
  );
};

export default TemplateTableViewButton;
