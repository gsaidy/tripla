import { FC } from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

import navbarItems from 'constants/navbarItems';
import MobileNavbarSubItem from '../atoms/MobileNavbarSubItem';

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
                <MobileNavbarSubItem key={text} text={text} href={href} closeNavbar={closeNavbar} />
              ))}
            </div>
          </Panel>
        ))}
      </Collapse>
    </nav>
  </div>
);

export default MobileNavbarItems;
