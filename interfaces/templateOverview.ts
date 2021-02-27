import User from './user';
import { ReactNode } from 'react';

interface TemplateOverview {
  id: number;
  name: string;
  description?: string;
  user?: User;
  createdAt: string;
  updatedAt: string;
  action: ReactNode;
}

export default TemplateOverview;
