import Section from './section';
import User from './user';

interface Template {
  name: string;
  description?: string;
  sections?: Section[];
  user?: User;
}

export default Template;
