import { FC } from 'react';

const HeroPolygon: FC = () => (
  <>
    <svg
      className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg>
    <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
  </>
);

export default HeroPolygon;
