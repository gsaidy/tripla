import { FC } from 'react';
import { Divider } from 'antd';

const TemplateTableHeader: FC<{ title: string }> = ({ title }) => (
  <Divider className="pb-3" orientation="left">
    {title}
  </Divider>
);

export default TemplateTableHeader;
