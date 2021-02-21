import { FC } from 'react';
import { Button } from 'antd';

const CreateTemplateButton: FC<{ loading: boolean }> = ({ loading = false }) => (
  <Button className="rounded" type="primary" htmlType="submit" size="large" loading={loading}>
    Create Template
  </Button>
);

export default CreateTemplateButton;
