import { FC } from 'react';

import Section from 'interfaces/section';

const TripSections: FC<{ sections: Section[] }> = ({ sections }) => {
  return (
    <div>
      {sections.map(({ name }) => (
        <h1 key={name}>{name}</h1>
      ))}
    </div>
  );
};

export default TripSections;
