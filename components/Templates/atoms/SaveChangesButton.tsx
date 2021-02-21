import { FC } from 'react';
import { Button } from 'antd';

const SaveChangesButton: FC = () => (
  <Button className="rounded" type="primary" htmlType="submit" size="large">
    Save
  </Button>
);

export default SaveChangesButton;
