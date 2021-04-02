import { FC } from 'react';

import Section from 'interfaces/section';
import NoSectionsAlert from './molecules/NoSectionsAlert';

const TripSections: FC<{ sections: Section[] }> = ({ sections }) => {
  if (sections.length === 0) {
    return <NoSectionsAlert />;
  }
  return (
    <div>
      {sections.map(({ name }) => (
        <h1 key={name}>{name}</h1>
      ))}
    </div>
  );
};

export default TripSections;
