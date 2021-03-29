import { FC, useContext } from 'react';
import { Button } from 'antd';

import { TemplateFormContext } from '../../Templates/organisms/TemplateForm';
import EntityType from 'enums/entityType';
import { TripFormContext } from '../../Trips/organisms/TripForm';

const CancelButton: FC<{ entity: EntityType; onClick: () => void }> = ({
  entity,
  onClick: setFormModeToView,
}) => {
  const context = entity === EntityType.Template ? TemplateFormContext : TripFormContext;
  const { resetFields } = useContext(context);

  const onClick = () => {
    resetFields();
    setFormModeToView();
  };

  return (
    <Button className="rounded" size="large" onClick={onClick}>
      Cancel
    </Button>
  );
};

export default CancelButton;
