import { FC } from 'react';
import { LoginOutlined, FileTextOutlined, CameraOutlined, EyeOutlined } from '@ant-design/icons';

import Feature from '../atoms/Feature';

const FeaturesList: FC = () => (
  <div className="mt-10">
    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
      <Feature
        title="Sign in with Google, Facebook or Github"
        description="You can still explore trips and templates and even create your own without signing
            in. But it is recommended to sign in before creating trips and templates to be able
            to edit them later if needed."
        icon={<LoginOutlined />}
      />
      <Feature
        title="Create Templates"
        description="Templates are the building blocks of trips. You specify the sections and their
            elements there. Then the template could be used in one or multiple trips."
        icon={<FileTextOutlined />}
      />
      <Feature
        title="Create Trips"
        description="Create your trip before you leave then you will be able to access it when you reach
            your destination so it could be your guide to make the most out of your trip."
        icon={<CameraOutlined />}
      />
      <Feature
        title="Explore other users Trips & Templates"
        description="Explore trips created by other users, maybe they are visiting the same destination.
            You could also explore templates created by other users and use them to create your
            own trip."
        icon={<EyeOutlined />}
      />
    </dl>
  </div>
);

export default FeaturesList;
