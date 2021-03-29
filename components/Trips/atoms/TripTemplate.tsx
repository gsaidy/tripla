import { FC, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { Select, Form } from 'antd';
const { Option } = Select;

import GET_TRIP_TEMPLATE_OPTIONS from 'gql/queries/getTripTemplateOptions';
import User from 'interfaces/user';
import { TripFormContext } from '../organisms/TripForm';
import FormMode from 'enums/formMode';

const TripTemplate: FC = () => {
  const { loading, data } = useQuery(GET_TRIP_TEMPLATE_OPTIONS);
  const { formMode } = useContext(TripFormContext);

  return (
    <Form.Item
      className="-mt-3 xs:mt-0"
      label="Template"
      name="templateId"
      rules={[{ required: true, message: 'Please select a template.' }]}
    >
      <Select
        showSearch
        optionFilterProp="label"
        loading={loading}
        bordered={formMode !== FormMode.View}
        showArrow={formMode !== FormMode.View}
      >
        {data?.templates.map(({ id, name, user }: { id: number; name: string; user?: User }) => {
          const userName = user ? user.name : 'Anonymous';
          return (
            <Option key={id} value={id} label={`${name} (${userName})`}>
              {`${name} (${userName})`}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};

export default TripTemplate;
