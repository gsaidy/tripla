import { FC } from 'react';

import Section from 'interfaces/section';
import TripSectionHeader from '../atoms/TripSectionHeader';
import TripSectionTable from '../atoms/TripSectionTable';

const TripSection: FC<{ section: Section }> = ({ section }) => (
  <div>
    <TripSectionHeader name={section.name} />
    <TripSectionTable name={section.name} attributes={section.attributes} />
  </div>
);

export default TripSection;
