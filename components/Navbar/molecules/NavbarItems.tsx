import { FC, useState } from 'react';
import Link from 'next/link';
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons';

const items = [
  {
    text: 'Itineraries',
    subItems: [
      {
        href: '/itineraries/create',
        text: 'Create Itinerary',
        description: 'Create your trip itinerary.',
      },
      {
        href: '/itineraries',
        text: 'View Itineraries',
        description: 'See a list of itineraries created by you or by other users.',
      },
    ],
  },
  {
    text: 'Templates',
    subItems: [
      {
        href: '/templates/create',
        text: 'Create Template',
        description: 'Create your itinerary template.',
      },
      {
        href: '/templates',
        text: 'View Templates',
        description: 'See a list of templates created by you or by other users.',
      },
    ],
  },
];

const TOGGLE_SUB_ITEMS_AFTER = 150;

const NavbarItems: FC = () => {
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
    <nav className="hidden md:flex space-x-10">
      {items.map(({ text, subItems }) => (
        <div key={text} className="relative">
          <button
            type="button"
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
            <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:p-4">
                  {subItems.map(({ href, text, description }) => (
                    <Link key={text} href={href}>
                      <a className="-m-3 p-3 flex items-start border-b-2 border-gray-100 last:border-b-0 hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">{text}</p>
                          <p className="mt-1 text-sm text-gray-500">{description}</p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavbarItems;
