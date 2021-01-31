import { FC } from 'react';

import NameInput from '../../utilities/NameInput';

const TemplateName: FC = () => (
  <NameInput className="mb-3 xs:mb-6" name="templateName" entity="template" />
);

export default TemplateName;
