import { FC, useContext } from 'react';
import { AutoComplete, Form } from 'antd';
import usePlacesAutocomplete from 'use-places-autocomplete';

import { TripFormContext } from '../organisms/TripForm';
import FormMode from 'enums/formMode';

const TripDestination: FC = () => {
  const {
    suggestions: { data: options },
    setValue,
  } = usePlacesAutocomplete();
  const { formMode } = useContext(TripFormContext);

  return (
    <Form.Item
      className={`-mt-3 xs:mt-0 ${formMode === FormMode.View ? 'borderless-auto-complete' : ''}`}
      label="Destination"
      name="destination"
      rules={[
        { required: true, message: 'Please select a destination.' },
        { max: 250, message: 'Destination can not exceed 250 characters.' },
      ]}
    >
      <AutoComplete
        options={options.map(({ description: value }) => ({ value }))}
        onSearch={(value: string) => setValue(value)}
      />
    </Form.Item>
  );
};

export default TripDestination;
