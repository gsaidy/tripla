import { FC } from 'react';

import CopyrightSection from './molecules/CopyrightSection';
import GithubLink from './molecules/GithubLink';

const Footer: FC = () => (
  <footer className="sm:flex justify-between items-center py-3 sm:py-4 bg-gray-100">
    <CopyrightSection />
    <GithubLink />
  </footer>
);

export default Footer;
