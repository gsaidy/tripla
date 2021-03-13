import { FC } from 'react';
import { Button } from 'antd';
import Link from 'next/link';

const HeroButtons: FC = () => (
  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
    <Link href="/trips/create">
      <Button
        type="primary"
        className="rounded sm:rounded-md w-full md:w-48 h-12 md:h-14 text-base md:text-lg font-medium mr-3 mb-3 sm:mb-0"
      >
        Get Started
      </Button>
    </Link>
    <Link href="/trips">
      <Button className="rounded sm:rounded-md w-full md:w-48 h-12 md:h-14 text-base md:text-lg font-medium bg-yellow-400 hover:bg-yellow-300 hover:text-gray-700 border-transparent hover:border-transparent">
        Explore Trips
      </Button>
    </Link>
  </div>
);

export default HeroButtons;
