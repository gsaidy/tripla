import User from './user';
import { ReactNode } from 'react';

interface TripOverview {
  id: number;
  name: string;
  destination: string;
  template: { id: string; name: string };
  user?: User;
  createdAt: string;
  updatedAt: string;
  action: ReactNode;
}

export default TripOverview;
