import Attribute from './attribute';

interface Section {
  name: string;
  order?: number;
  attributes?: Attribute[];
}

export default Section;
