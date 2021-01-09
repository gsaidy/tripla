import { FC } from 'react';

const HeroTitle: FC = () => (
  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
    <span className="block xl:inline">
      <span className="text-green-500">Manage</span> your{' '}
      <span className="text-indigo-600">trip</span> in a{' '}
      <span className="text-blue-500">simple</span> and{' '}
      <span className="text-yellow-400">customizable</span> way.
    </span>
  </h1>
);

export default HeroTitle;
