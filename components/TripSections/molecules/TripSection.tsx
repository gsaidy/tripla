import { FC, useState } from 'react';
import { Table } from 'antd';
import moment, { Moment } from 'moment';

import Section from 'interfaces/section';
import TripSectionHeader from '../atoms/TripSectionHeader';
import Attribute from 'interfaces/attribute';
import TripSectionModal from '../../TripSectionModal/TripSectionModal';
import RowPlacement from 'enums/rowPlacement';
import EditType from 'enums/editType';
import { TIME_FORMAT, DATE_FORMAT } from 'constants/dateTimeFormats';

const TripSection: FC<{ section: Section }> = ({ section }) => {
  const [showSectionModal, setShowSectionModal] = useState(false);
  const [data, setData] = useState<Record<string, unknown>[]>([]);

  const renderTableCell = (value: unknown, editType: EditType) => {
    let tableCell = value;
    if (editType === EditType.DatePicker && value) {
      const date = value as Moment;
      tableCell = moment(date).format(DATE_FORMAT);
    } else if (editType === EditType.DateRangePicker && value) {
      const dateRange = value as Moment[];
      const [start, end] = dateRange;
      tableCell = `${moment(start).format(DATE_FORMAT)} - ${moment(end).format(DATE_FORMAT)}`;
    } else if (editType === EditType.TimePicker && value) {
      const time = value as Moment;
      tableCell = moment(time).format(TIME_FORMAT);
    } else if (editType === EditType.TimeRangePicker && value) {
      const timeRange = value as Moment[];
      const [start, end] = timeRange;
      tableCell = `${moment(start).format(TIME_FORMAT)} - ${moment(end).format(TIME_FORMAT)}`;
    }
    return tableCell as string;
  };

  const columns = section.attributes.map(({ name, edit }: Attribute) => ({
    title: name,
    dataIndex: name,
    ellipsis: true,
    align: 'center' as 'center' | 'left' | 'right',
    render: (value: unknown) => renderTableCell(value, edit),
  }));

  const onAdd = (placement: RowPlacement, row: Record<string, unknown>) => {
    if (placement === RowPlacement.First) {
      setData([{ addedAt: +new Date(), ...row }, ...data]);
    } else {
      setData([...data, { addedAt: +new Date(), ...row }]);
    }
  };

  return (
    <div>
      <TripSectionHeader name={section.name} onAddClick={() => setShowSectionModal(true)} />
      <Table
        rowKey="addedAt"
        columns={columns}
        dataSource={data}
        locale={{ emptyText: `No ${section.name} added yet.` }}
      />
      <TripSectionModal
        visible={showSectionModal}
        fields={section.attributes}
        hide={() => setShowSectionModal(false)}
        onAdd={onAdd}
      />
    </div>
  );
};

export default TripSection;
