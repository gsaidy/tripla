import { FC } from 'react';

import EntityHeader from '../../utilities/EntityHeader';

const AttributeHeader: FC<{ title: string; removeAttribute: () => void }> = ({
  title,
  removeAttribute,
}) => <EntityHeader className="border-b pb-1" title={title} remove={removeAttribute} />;

export default AttributeHeader;
