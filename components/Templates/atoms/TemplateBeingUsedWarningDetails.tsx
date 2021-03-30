import { FC } from 'react';

const TemplateBeingUsedWarningDetails: FC<{ trips: { id: number; name: string }[] }> = ({
  trips,
}) => (
  <div className="mt-1">
    {trips.map(({ id, name }) => (
      <div key={id}>
        Trip with name <span className="font-bold">{name}</span> is using this template
      </div>
    ))}
  </div>
);

export default TemplateBeingUsedWarningDetails;
