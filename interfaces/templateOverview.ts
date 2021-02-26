import User from './user';

interface TemplateOverview {
  id: number;
  name: string;
  description?: string;
  user?: User;
  createdAt: string;
  updatedAt: string;
}

export default TemplateOverview;
