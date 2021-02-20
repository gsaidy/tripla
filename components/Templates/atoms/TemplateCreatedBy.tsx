import { FC } from 'react';

import User from 'interfaces/user';

const TemplateCreatedBy: FC<{ user?: User }> = ({ user }) => (
  <div className="absolute bottom-0 right-0 pb-1 text-gray-600">
    <span className="italic">Created by:</span>{' '}
    <span className="font-semibold">{user ? user.name : 'Anonymous'}</span>
  </div>
);

export default TemplateCreatedBy;
