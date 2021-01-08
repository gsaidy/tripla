import { FC } from 'react';
import Link from 'next/link';
import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import NavbarLogo from './NavbarLogo';

const items = [
  { text: 'Create Itinerary', href: '/itineraries/create' },
  { text: 'View Itineraries', href: '/itineraries' },
  { text: 'Create Template', href: '/templates/create' },
  { text: 'View Templates', href: '/templates' },
];

const MobileNavbar: FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-between">
          <NavbarLogo />
          <div className="-mr-2">
            <span className="sr-only">Close menu</span>
            <CloseOutlined
              className="text-3xl bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={onClose}
            />
          </div>
        </div>
        <div className="mt-6">
          <nav className="grid gap-y-8">
            {items.map(({ text, href }) => (
              <Link key={text} href={href}>
                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span className="ml-3 text-base font-medium text-gray-900">{text}</span>
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="py-6 px-5 space-y-6">
        <Button title="Sign In" type="primary" size="large" block>
          Sign In
        </Button>
      </div>
    </div>
  </div>
);

export default MobileNavbar;
