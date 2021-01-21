import { FC } from 'react';

import FeaturesHeader from './molecules/FeaturesHeader';
import FeaturesList from './molecules/FeaturesList';

const Features: FC = () => (
  <div className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FeaturesHeader />
      <FeaturesList />
    </div>
  </div>
);

export default Features;
