import { FC } from 'react';

const TemplateBeingUsedWarningAction: FC<{ label: string; onClick: () => void }> = ({
  label,
  onClick,
}) => (
  <button type="button" className="italic cursor-pointer focus:outline-none" onClick={onClick}>
    Show {label}
  </button>
);

export default TemplateBeingUsedWarningAction;
