import { FC } from 'react';
import { GithubOutlined } from '@ant-design/icons';

const GithubLink: FC = () => (
  <a aria-label="Github Repository" href="https://github.com/gsaidy/tripla">
    <GithubOutlined className="flex justify-center text-2xl md:mr-4 mt-2 md:mt-0 cursor-pointer" />
  </a>
);

export default GithubLink;
