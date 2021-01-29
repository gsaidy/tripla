import { FC, ReactNode } from 'react';

const FormSection: FC<{ header: ReactNode; children: ReactNode }> = ({ header, children }) => (
  <div className="max-w-7xl mx-auto pt-6 sm:px-6 lg:px-8">
    <div className="md:grid md:grid-cols-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <div className="text-lg font-bold leading-6 text-gray-900">{header}</div>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-5">
        <div className="shadow bg-white sm:rounded-md sm:overflow-hidden">
          <div className="px-4 pt-5 sm:p-6 sm:pb-0">{children}</div>
        </div>
      </div>
    </div>
  </div>
);

export default FormSection;
