import Attribute from './attribute';

interface Section {
  id?: number;
  name: string;
  order?: number;
  attributes: Attribute[];
}

export default Section;
