import { FC } from 'react';

const LinkType: FC = () => (
  <div className="-mt-2">
    <label htmlFor="link">Link: </label>
    <a
      className="text-blue-500 underline hover:text-blue-800"
      href="https://tripla.vercel.app"
      target="_blank"
      rel="noreferrer"
    >
      https://tripla.vercel.app
    </a>
  </div>
);

export default LinkType;
