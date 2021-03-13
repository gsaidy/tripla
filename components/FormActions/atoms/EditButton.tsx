import { FC } from 'react';
import { Button } from 'antd';

import EntityType from 'enums/entityType';
import { capitalize } from 'utils/helpers';

const EditButton: FC<{ entity: EntityType; onClick: () => void }> = ({ entity, onClick }) => (
  <Button className="rounded" type="primary" size="large" onClick={onClick}>
    Edit {capitalize(entity)}
  </Button>
);

export default EditButton;
