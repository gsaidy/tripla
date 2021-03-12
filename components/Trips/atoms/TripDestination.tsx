import { FC } from 'react';
import { AutoComplete, Form } from 'antd';
import usePlacesAutocomplete from 'use-places-autocomplete';

const TripDestination: FC = () => {
  const {
    suggestions: { data: options },
    setValue,
  } = usePlacesAutocomplete();

  return (
    <Form.Item
      className="-mt-3 xs:mt-0"
      label="Destination"
      name="destination"
      rules={[{ required: true, message: 'Please select a destination.' }]}
    >
      <AutoComplete
        options={options.map(({ description: value }) => ({ value }))}
        onSearch={(value: string) => setValue(value)}
      />
    </Form.Item>
  );
};

export default TripDestination;
