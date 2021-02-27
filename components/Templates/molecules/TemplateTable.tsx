import { FC } from 'react';
import { Table } from 'antd';

import templateTableColumns from 'constants/templateTableColumns';
import TemplateOverview from 'interfaces/templateOverview';
import TemplateTableHeader from '../atoms/TemplateTableHeader';

const TemplateTable: FC<{ title: string; data: TemplateOverview[] }> = ({ title, data }) => (
  <div className="max-w-7xl mx-auto py-6 px-4 lg:px-6">
    <TemplateTableHeader title={title} />
    <Table columns={templateTableColumns} dataSource={data} rowKey="id" scroll={{ x: 1000 }} />
  </div>
);

export default TemplateTable;
