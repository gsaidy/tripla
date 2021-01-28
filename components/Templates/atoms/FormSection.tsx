import { FC, ReactNode } from 'react';

const FormSection: FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
  <div className="max-w-7xl mx-auto pt-6 sm:px-6 lg:px-8">
    <div className="md:grid md:grid-cols-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-bold leading-6 text-gray-900">{title}</h3>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-5">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 pt-5 bg-white space-y-6 sm:p-6 sm:pb-0">
            <div className="grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-3 lg:col-span-2">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FormSection;
