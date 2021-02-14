import EditType from 'enums/editType';
import ViewType from 'enums/viewType';

interface Template {
  name: string;
  description?: string;
  sections?: Section[];
}

interface Section {
  name: string;
  order?: number;
  attributes?: Attribute[];
}

interface Attribute {
  name: string;
  required?: boolean;
  edit: EditType;
  view: ViewType;
  options?: Option[];
}

interface Option {
  name: string;
  color?: string;
}

export default Template;
