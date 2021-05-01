import { FC, useContext } from 'react';
import { Button, Divider } from 'antd';

import { TripFormContext } from '../../Trips/organisms/TripForm';
import FormMode from 'enums/formMode';

const TripSectionHeader: FC<{ name: string; onAddClick: () => void }> = ({ name, onAddClick }) => {
  const { formMode } = useContext(TripFormContext);

  return (
    <div className="relative">
      {formMode !== FormMode.View && (
        <Button className="float-right" type="primary" onClick={onAddClick}>
          Add
        </Button>
      )}
      <Divider orientation="left">{name}</Divider>
    </div>
  );
};

export default TripSectionHeader;
