import User from './user';
import Template from './template';

interface Trip {
  name: string;
  destination: string;
  templateId: number;
  template?: Template;
  user?: User;
  data?: unknown;
}

export default Trip;
