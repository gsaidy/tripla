import { FC } from 'react';
import Link from 'next/link';
import { Collapse } from 'antd';
const { Panel } = Collapse;

import navbarItems from '../../../constants/navbarItems';

const MobileNavbarItems: FC<{ closeNavbar: () => void }> = ({ closeNavbar }) => (
  <div className="mt-6 -mb-3">
    <nav>
      <Collapse ghost>
        {navbarItems.map(({ text, subItems }) => (
          <Panel
            key={text}
            header={<div className="text-xl font-semibold text-gray-900">{text}</div>}
            showArrow={false}
          >
            <div className="space-y-5 -mt-1">
              {subItems.map(({ href, text }) => (
                <Link key={text} href={href}>
                  <button
                    className="block ml-3 text-lg font-medium text-gray-700 focus:outline-none"
                    onClick={closeNavbar}
                  >
                    {text}
                  </button>
                </Link>
              ))}
            </div>
          </Panel>
        ))}
      </Collapse>
    </nav>
  </div>
);

export default MobileNavbarItems;
