import { FC, ReactNode } from 'react';

const FormActions: FC<{ className?: string; children: ReactNode }> = ({ className, children }) => (
  <div className={`max-w-7xl mx-auto pb-4 sm:px-4 lg:px-6 ${className}`}>
    <div className="md:grid md:grid-cols-6">
      <div className="md:col-start-2 md:col-span-5 text-center md:text-left px-16 xs:px-0 space-y-3 xs:space-y-0 xs:space-x-3 flex flex-col xs:block">
        {children}
      </div>
    </div>
  </div>
);

export default FormActions;
