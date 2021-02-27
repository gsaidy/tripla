import { FC, useState, ReactNode } from 'react';
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons';

const TOGGLE_SUB_ITEMS_AFTER = 150;

const NavbarItem: FC<{ text: string; children: ReactNode }> = ({ text, children }) => {
  const [showMenuFor, setShowMenuFor] = useState<string | null>(null);

  const toggleSubItemsVisibility = (text: string) => {
    setTimeout(() => {
      setShowMenuFor(showMenuFor === text ? null : text);
    }, TOGGLE_SUB_ITEMS_AFTER);
  };

  const hideSubItems = () => {
    setTimeout(() => {
      setShowMenuFor(null);
    }, TOGGLE_SUB_ITEMS_AFTER);
  };

  return (
    <div className="relative">
      <button
        className="text-gray-700 inline-flex items-center text-base font-semibold hover:text-blue-400 focus:outline-none focus:ring-0"
        onClick={() => toggleSubItemsVisibility(text)}
        onBlur={hideSubItems}
      >
        <span>{text}</span>
        {showMenuFor === text ? (
          <CaretUpFilled className="ml-1 mt-0.5" />
        ) : (
          <CaretDownFilled className="ml-1 mt-0.5" />
        )}
      </button>
      {showMenuFor === text && (
        <div className="absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:p-4">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
