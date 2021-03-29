import { FC } from 'react';

const TemplateBeingUsedWarningTitle: FC<{ count: number }> = ({ count }) => (
  <span>{count} trip(s) are using this template and will be affected by editing it.</span>
);

export default TemplateBeingUsedWarningTitle;
