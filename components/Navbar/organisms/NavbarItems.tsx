import { FC } from 'react';

import navbarItems from 'constants/navbarItems';
import NavbarItem from '../molecules/NavbarItem';
import NavbarSubItem from '../molecules/NavbarSubItem';

const NavbarItems: FC = () => (
  <nav className="hidden md:flex space-x-10">
    {navbarItems.map(({ text, subItems }) => (
      <NavbarItem key={text} text={text}>
        {subItems.map(({ href, text, description }) => (
          <NavbarSubItem key={text} text={text} href={href} description={description} />
        ))}
      </NavbarItem>
    ))}
  </nav>
);

export default NavbarItems;
