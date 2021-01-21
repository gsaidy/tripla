import { FC, ReactNode } from 'react';

const Feature: FC<{ title: string; description: string; icon: ReactNode }> = ({
  title,
  description,
  icon,
}) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white text-2xl">
        {icon}
      </div>
    </div>
    <div className="ml-4">
      <dt className="text-lg leading-6 font-medium text-gray-900">{title}</dt>
      <dd className="mt-2 text-base text-gray-500">{description}</dd>
    </div>
  </div>
);

export default Feature;
