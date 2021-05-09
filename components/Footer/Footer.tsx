import { FC } from 'react';

import CopyrightSection from './atoms/CopyrightSection';
import GithubLink from './atoms/GithubLink';

const Footer: FC = () => (
  <footer className="sm:flex justify-between items-center py-3 sm:py-4 bg-gray-100">
    <CopyrightSection />
    <GithubLink />
  </footer>
);

export default Footer;
