import { FC, useState, ReactNode } from 'react';
import { Table, Tag } from 'antd';
import moment, { Moment } from 'moment';

import Section from 'interfaces/section';
import TripSectionHeader from '../atoms/TripSectionHeader';
import Attribute from 'interfaces/attribute';
import TripSectionModal from '../../TripSectionModal/TripSectionModal';
import RowPlacement from 'enums/rowPlacement';
import EditType from 'enums/editType';
import { TIME_FORMAT, DATE_FORMAT } from 'constants/dateTimeFormats';
import ViewType from 'enums/viewType';
import Option from 'interfaces/option';

const TripSection: FC<{ section: Section }> = ({ section }) => {
  const [showSectionModal, setShowSectionModal] = useState(false);
  const [data, setData] = useState<Record<string, unknown>[]>([]);

  const renderTableCell = (
    value: unknown,
    editType: EditType,
    viewType: ViewType,
    options?: Option[]
  ) => {
    if (!value) {
      return null;
    }
    let tableCell = value as string | ReactNode;
    if (editType === EditType.DatePicker) {
      const date = value as Moment;
      tableCell = moment(date).format(DATE_FORMAT);
    } else if (editType === EditType.DateRangePicker) {
      const dateRange = value as Moment[];
      const [start, end] = dateRange;
      tableCell = `${moment(start).format(DATE_FORMAT)} - ${moment(end).format(DATE_FORMAT)}`;
    } else if (editType === EditType.TimePicker) {
      const time = value as Moment;
      tableCell = moment(time).format(TIME_FORMAT);
    } else if (editType === EditType.TimeRangePicker) {
      const timeRange = value as Moment[];
      const [start, end] = timeRange;
      tableCell = `${moment(start).format(TIME_FORMAT)} - ${moment(end).format(TIME_FORMAT)}`;
    }
    if (viewType === ViewType.Tag) {
      const color = options?.find(({ name }: Option) => name === tableCell)?.color;
      tableCell = <Tag color={color}>{tableCell}</Tag>;
    } else if (viewType === ViewType.Link) {
      const link = tableCell as string;
      tableCell = (
        <a
          className="text-blue-500 underline hover:text-blue-800"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {link}
        </a>
      );
    }
    return tableCell;
  };

  const columns = section.attributes.map(({ name, edit, view, options }: Attribute) => ({
    title: name,
    dataIndex: name,
    ellipsis: true,
    align: 'center' as 'center' | 'left' | 'right',
    render: (value: unknown) => renderTableCell(value, edit, view, options),
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
