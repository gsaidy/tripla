import { FC, useState, useEffect } from 'react';

const images = ['havana', 'prague', 'rio', 'santorini', 'tokyo'];

const HeroImage: FC = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      changeImageIndex();
    }, 5000);
    return function cleanup() {
      clearInterval(interval);
    };
  });

  const changeImageIndex = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full"
        src={`${images[imageIndex]}.jpg`}
        alt=""
      />
    </div>
  );
};

export default HeroImage;
