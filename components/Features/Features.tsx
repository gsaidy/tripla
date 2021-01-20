import { FC } from 'react';
import { LoginOutlined, FileTextOutlined, CameraOutlined, EyeOutlined } from '@ant-design/icons';

import FeaturesHeader from './molecules/FeaturesHeader';

const Features: FC = () => (
  <div className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FeaturesHeader />
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white text-2xl">
                <LoginOutlined />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Sign in with Google, Facebook or Github
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                You can still explore trips and templates and even create your own without signing
                in. But it is recommended to sign in before creating trips and templates to be able
                to edit them later if needed.
              </dd>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white text-2xl">
                <FileTextOutlined />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">Create Templates</dt>
              <dd className="mt-2 text-base text-gray-500">
                Templates are the building blocks of trips. You specify the sections and their
                elements there. Then the template could be used in one or multiple trips.
              </dd>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white text-2xl">
                <CameraOutlined />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">Create Trips</dt>
              <dd className="mt-2 text-base text-gray-500">
                Create your trip before you leave then you will be able to access it when you reach
                your destination so it could be your guide to make the most out of your trip.
              </dd>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white text-2xl">
                <EyeOutlined />
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Explore other users Trips & Templates
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Explore trips created by other users, maybe they are visiting the same destination.
                You could also explore templates created by other users and use them to create your
                own trip.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
);

export default Features;
