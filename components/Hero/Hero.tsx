import { FC } from 'react';

import HeroPolygon from './molecules/HeroPolygon';
import HeroMain from './molecules/HeroMain';
import HeroImage from './molecules/HeroImage';

const Hero: FC = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <HeroPolygon />
        <HeroMain />
      </div>
    </div>
    <HeroImage />
  </div>
);

export default Hero;
