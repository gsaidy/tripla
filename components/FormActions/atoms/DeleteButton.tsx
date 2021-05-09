import { FC, ReactNode } from 'react';
import { Button, Popconfirm } from 'antd';

import EntityType from 'enums/entityType';
import { capitalize } from 'utils/helpers';

const DeleteButton: FC<{
  entity: EntityType;
  additionalWarning?: ReactNode;
  onConfirm: () => void;
}> = ({ entity, additionalWarning, onConfirm }) => (
  <Popconfirm
    title={
      <>
        <div>Are you sure you want to delete this {entity}?</div>
        {additionalWarning}
      </>
    }
    okText="Yes"
    cancelText="No"
    onConfirm={onConfirm}
  >
    <Button className="rounded" size="large" danger>
      Delete {capitalize(entity)}
    </Button>
  </Popconfirm>
);

export default DeleteButton;
