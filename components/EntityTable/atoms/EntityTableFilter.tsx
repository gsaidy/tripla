import { FC, Key, useContext, Context } from 'react';
import { useQuery, DocumentNode } from '@apollo/client';
import { SearchOutlined } from '@ant-design/icons';
import { Select, Button } from 'antd';
const { Option } = Select;
import { FilterConfirmProps } from 'antd/lib/table/interface';
import { useSession } from 'next-auth/client';

import { getWhereClause } from 'utils/filters';
import User from 'interfaces/user';
import CreatorFilter from 'enums/creatorFilter';

const EntityTableFilter: FC<{
  context: Context<{
    createdBy: CreatorFilter;
  }>;
  query: DocumentNode;
  field: string;
  selectedKeys: Key[];
  setSelectedKeys: (selectedKeys: Key[]) => void;
  confirm: (param?: FilterConfirmProps) => void;
  clearFilters?: () => void;
}> = ({ context, query, field, selectedKeys, setSelectedKeys, confirm, clearFilters }) => {
  const [session] = useSession();
  const user = session?.user as User;
  const { createdBy } = useContext(context);

  const { loading, data } = useQuery(query, {
    variables: {
      where: getWhereClause(createdBy, user),
    },
    fetchPolicy: 'cache-and-network',
  });

  const getOptions = (data: { [key: string]: { [field: string]: string }[] }) => {
    const options = Object.values(data)[0].map((element) => element[field]);
    const optionsWithoutDuplicates = Array.from(new Set(options));
    return optionsWithoutDuplicates;
  };
  const options = data ? getOptions(data) : [];

  return (
    <div className="p-2">
      <Select
        className="block mb-2"
        placeholder="Search"
        showSearch
        value={selectedKeys[0] as string | undefined}
        loading={loading}
        onChange={(value: string) => setSelectedKeys(value ? [value] : [])}
      >
        {options.map((value) => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Select>
      <div className="grid grid-cols-2 gap-x-2">
        <Button
          type="primary"
          className="col-span-1 flex items-center"
          size="small"
          icon={<SearchOutlined />}
          disabled={loading}
          onClick={() => confirm({ closeDropdown: true })}
        >
          Search
        </Button>
        <Button className="col-span-1" size="small" disabled={loading} onClick={clearFilters}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default EntityTableFilter;
