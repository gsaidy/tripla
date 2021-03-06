import { FC, useState, ReactNode, useContext, useEffect } from 'react';
import { Table, Tag } from 'antd';
import moment, { Moment } from 'moment';
import { ColumnsType } from 'antd/lib/table';

import Section from 'interfaces/section';
import TripSectionHeader from '../atoms/TripSectionHeader';
import Attribute from 'interfaces/attribute';
import TripSectionModal from '../../TripSectionModal/TripSectionModal';
import RowPlacement from 'enums/rowPlacement';
import EditType from 'enums/editType';
import { TIME_FORMAT, DATE_FORMAT } from 'constants/dateTimeFormats';
import ViewType from 'enums/viewType';
import Option from 'interfaces/option';
import TripSectionRowDeleteButton from '../atoms/TripSectionRowDeleteButton';
import TripSectionRowEditButton from '../atoms/TripSectionRowEditButton';
import FormMode from 'enums/formMode';
import { TripFormContext } from '../../Trips/organisms/TripForm';

const TripSection: FC<{ section: Section }> = ({ section }) => {
  const [showSectionModal, setShowSectionModal] = useState(false);
  const [modalMode, setModalMode] = useState(FormMode.Create);
  const [modalValues, setModalValues] = useState<Record<string, unknown> | undefined>(undefined);
  const { formMode } = useContext(TripFormContext);
  const { getFieldValue, setFieldsValue } = useContext(TripFormContext);

  const getInitialData = () => {
    if (formMode === FormMode.Create) return [];
    const allSectionsData = getFieldValue('data') as Record<string, unknown> | undefined;
    return (allSectionsData?.[section.name] ?? []) as Record<string, unknown>[];
  };

  const [data, setData] = useState<Record<string, unknown>[]>(getInitialData());

  useEffect(() => {
    setFieldsValue({
      data: { ...(getFieldValue('data') as Record<string, unknown>), [section.name]: data },
    });
  }, [data, getFieldValue, setFieldsValue, section.name]);

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

  const columns: ColumnsType<Record<string, unknown>> = section.attributes.map(
    ({ name, edit, view, options }: Attribute) => ({
      title: name,
      dataIndex: name,
      ellipsis: true,
      align: 'center' as 'center' | 'left' | 'right',
      sorter: (a: { [name: string]: unknown }, b: Record<string, unknown>) =>
        (a[name] as { [name: string]: unknown }) >= (b[name] as { [name: string]: unknown })
          ? 1
          : -1,
      render: (value: unknown) => renderTableCell(value, edit, view, options),
    })
  );

  if (formMode !== FormMode.View) {
    columns.push({
      title: 'Actions',
      dataIndex: 'addedAt',
      width: '105px',
      fixed: 'right',
      render(addedAt: Date) {
        return (
          <div className="space-x-2">
            <TripSectionRowEditButton onClick={() => onEdit(addedAt)} />
            <TripSectionRowDeleteButton onConfirm={() => deleteRow(addedAt)} />
          </div>
        );
      },
    });
  }

  const onAdd = () => {
    setModalMode(FormMode.Create);
    setShowSectionModal(true);
  };

  const addRow = (placement: RowPlacement, row: Record<string, unknown>) => {
    if (placement === RowPlacement.First) {
      setData([{ addedAt: +new Date(), ...row }, ...data]);
    } else {
      setData([...data, { addedAt: +new Date(), ...row }]);
    }
  };

  const deleteRow = (rowToDeleteAddedAt: Date) => {
    setData(data.filter(({ addedAt }) => addedAt !== rowToDeleteAddedAt));
  };

  const onEdit = (rowToEditAddedAt: Date) => {
    setModalMode(FormMode.Edit);
    const rowToEdit = data.find(({ addedAt }) => addedAt === rowToEditAddedAt);
    setModalValues(transformRow(rowToEdit as Record<string, unknown>));
    setShowSectionModal(true);
  };

  const transformRow = (row: Record<string, unknown>) => {
    const transformedRow: Record<string, unknown> = {};
    Object.keys(row).forEach((key: string) => {
      const editType = section.attributes.find(({ name }) => name === key)?.edit;
      const { [key]: value } = row;
      if (
        (editType === EditType.DatePicker || editType === EditType.TimePicker) &&
        typeof value === 'string'
      ) {
        transformedRow[key] = moment(value as string);
      } else if (
        (editType === EditType.TimeRangePicker || editType === EditType.DateRangePicker) &&
        value &&
        typeof (value as string[])[0] === 'string'
      ) {
        transformedRow[key] = [moment((value as string[])[0]), moment((value as string[])[1])];
      } else {
        transformedRow[key] = value;
      }
    });
    return transformedRow;
  };

  const editRow = (row: Record<string, unknown>) => {
    const index = data.findIndex(({ addedAt }) => addedAt === modalValues?.addedAt);
    setData([
      ...data.slice(0, index),
      { ...row, addedAt: modalValues?.addedAt },
      ...data.slice(index + 1),
    ]);
  };

  return (
    <div className={data.length === 0 ? 'mb-11 last:mb-6' : 'mb-7 last:mb-2'}>
      <TripSectionHeader name={section.name} onAddClick={onAdd} />
      <Table
        rowKey="addedAt"
        columns={columns}
        dataSource={data}
        locale={{ emptyText: `No ${section.name} added yet.` }}
        scroll={{ x: section.attributes.length * 200 }}
        pagination={{
          simple: window.screen.width < 350,
          size: window.screen.width < 500 ? 'small' : 'default',
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '25', '50'],
          showTotal: (total: number, range: number[]) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
      />
      <TripSectionModal
        visible={showSectionModal}
        mode={modalMode}
        fields={section.attributes}
        initialValues={modalValues}
        hide={() => setShowSectionModal(false)}
        onAdd={addRow}
        onEdit={editRow}
      />
    </div>
  );
};

export default TripSection;
