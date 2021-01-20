import { FC } from 'react';

import FeaturesTitle from '../atoms/FeaturesTitle';
import FeaturesSubTitle from '../atoms/FeaturesSubTitle';

const FeaturesHeader: FC = () => (
  <div className="lg:text-center">
    <FeaturesTitle />
    <FeaturesSubTitle />
  </div>
);

export default FeaturesHeader;
