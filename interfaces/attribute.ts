import EditType from 'enums/editType';
import ViewType from 'enums/viewType';
import Option from './option';

interface Attribute {
  id?: number;
  name: string;
  required?: boolean;
  edit: EditType;
  view: ViewType;
  options?: Option[];
}

export default Attribute;
