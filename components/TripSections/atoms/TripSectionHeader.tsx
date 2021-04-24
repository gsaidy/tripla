import { FC } from 'react';
import { Button, Divider } from 'antd';

const TripSectionHeader: FC<{ name: string; onAddClick: () => void }> = ({ name, onAddClick }) => (
  <div className="relative">
    <Button className="float-right" type="primary" onClick={onAddClick}>
      Add
    </Button>
    <Divider orientation="left">{name}</Divider>
  </div>
);

export default TripSectionHeader;
