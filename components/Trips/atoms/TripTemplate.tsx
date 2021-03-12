import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Select, Form } from 'antd';
const { Option } = Select;

import GET_TRIP_TEMPLATE_OPTIONS from 'gql/queries/getTripTemplateOptions';
import User from 'interfaces/user';

const TripTemplate: FC = () => {
  const { loading, data } = useQuery(GET_TRIP_TEMPLATE_OPTIONS);

  return (
    <Form.Item
      className="-mt-3 xs:mt-0"
      label="Template"
      name="template"
      rules={[{ required: true, message: 'Please select a template.' }]}
    >
      <Select showSearch loading={loading}>
        {data?.templates.map(({ id, name, user }: { id: number; name: string; user?: User }) => {
          const userName = user ? user.name : 'Anonymous';
          return (
            <Option key={id} value={`${name} (${userName})`}>
              {`${name} (${userName})`}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};

export default TripTemplate;
