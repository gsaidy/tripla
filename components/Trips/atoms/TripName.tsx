import { FC, useContext } from 'react';

import NameInput from '../../Utilities/NameInput';
import { TripFormContext } from '../organisms/TripForm';
import FormMode from 'enums/formMode';

const TripName: FC = () => {
  const { formMode } = useContext(TripFormContext);

  return <NameInput name="name" entity="trip" bordered={formMode !== FormMode.View} />;
};

export default TripName;
