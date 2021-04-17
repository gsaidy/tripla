import { FC } from 'react';
import { Button, Divider } from 'antd';

const TripSectionHeader: FC<{ name: string }> = ({ name }) => (
  <div className="relative">
    <Button className="float-right" type="primary">
      Add
    </Button>
    <Divider orientation="left">{name}</Divider>
  </div>
);

export default TripSectionHeader;
