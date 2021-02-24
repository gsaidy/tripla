import { FC } from 'react';
import { Button } from 'antd';

const CreateTemplateButton: FC<{ loading: boolean; label: string }> = ({
  loading = false,
  label,
}) => (
  <Button className="rounded" type="primary" htmlType="submit" size="large" loading={loading}>
    {label}
  </Button>
);

export default CreateTemplateButton;
