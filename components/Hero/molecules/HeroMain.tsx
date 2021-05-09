import { FC } from 'react';

import HeroTitle from '../atoms/HeroTitle';
import HeroSubtitle from '../atoms/HeroSubtitle';
import HeroButtons from '../atoms/HeroButtons';

const HeroMain: FC = () => (
  <main className="my-4 mx-auto max-w-7xl px-4 sm:mb-0 sm:mt-8 sm:px-6 md:mt-14 lg:mt-20 lg:px-8 xl:mt-28">
    <div className="sm:text-center lg:text-left">
      <HeroTitle />
      <HeroSubtitle />
      <HeroButtons />
    </div>
  </main>
);

export default HeroMain;
