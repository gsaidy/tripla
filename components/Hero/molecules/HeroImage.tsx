import { FC } from 'react';

const HeroImage: FC = () => (
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img
      className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      src="https://cdn.pixabay.com/photo/2020/01/31/07/23/tokyo-4807294_1280.jpg"
      alt=""
    />
  </div>
);

export default HeroImage;
