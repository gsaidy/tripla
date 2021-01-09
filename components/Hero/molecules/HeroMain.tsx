import { FC } from 'react';

import HeroTitle from '../atoms/HeroTitle';
import HeroSubtitle from '../atoms/HeroSubtitle';
import HeroButtons from '../atoms/HeroButtons';

const HeroMain: FC = () => (
  <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    <div className="sm:text-center lg:text-left">
      <HeroTitle />
      <HeroSubtitle />
      <HeroButtons />
    </div>
  </main>
);

export default HeroMain;
