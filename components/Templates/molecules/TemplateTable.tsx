import { FC } from 'react';
import { Table } from 'antd';

import templateTableColumns from 'constants/templateTableColumns';
import TemplateOverview from 'interfaces/templateOverview';

const TemplateTable: FC<{ data: TemplateOverview[] }> = ({ data }) => (
  <div className="max-w-7xl mx-auto py-6 px-4 lg:px-6">
    <Table columns={templateTableColumns} dataSource={data} rowKey="id" scroll={{ x: 1000 }} />
  </div>
);

export default TemplateTable;
