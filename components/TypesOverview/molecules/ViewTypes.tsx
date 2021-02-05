import { FC } from 'react';
import { Card, Divider } from 'antd';

import LabelType from '../atoms/LabelType';
import TagType from '../atoms/TagType';

const ViewTypes: FC = () => (
  <Card id="view" className="text-center mt-6" type="inner" title="View Types">
    <LabelType />
    <Divider />
    <TagType />
  </Card>
);

export default ViewTypes;
