import { FC } from 'react';
import { Button, Popconfirm } from 'antd';

import EntityType from 'enums/entityType';
import { capitalize } from 'utils/helpers';

const DeleteButton: FC<{ entity: EntityType; onConfirm: () => void }> = ({ entity, onConfirm }) => (
  <Popconfirm
    title={`Are you sure you want to delete this ${entity}?`}
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
