import { FC } from 'react';
import { Card, Divider, Tag } from 'antd';

import EditTypes from './molecules/EditTypes';

const TypesOverview: FC = () => (
  <div className="min-h-tripla bg-gray-50">
    <div className="mx-auto py-6 sm:w-11/12 md:w-3/4 lg:w-3/5">
      <EditTypes />
      <Card className="text-center mt-6" type="inner" title="View Types">
        <div className="mt-1 -mb-2">
          <label htmlFor="label">Label: Label</label>
        </div>
        <Divider />
        <div className="mt-3 mb-1.5 space-x-2">
          <label htmlFor="tag">Tag:</label>
          <Tag color="#34D399">High</Tag>
          <Tag color="#FCD34D">Medium</Tag>
          <Tag color="#EF4444">Low</Tag>
        </div>
      </Card>
    </div>
  </div>
);

export default TypesOverview;
