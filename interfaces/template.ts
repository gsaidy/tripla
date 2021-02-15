import Section from './section';

interface Template {
  name: string;
  description?: string;
  sections?: Section[];
}

export default Template;
