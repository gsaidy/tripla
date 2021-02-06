import EditType from '../../SectionAttributes/enums/EditType';
import ViewType from '../../SectionAttributes/enums/ViewType';

interface Template {
  templateName: string;
  templateDescription?: string;
  templateSections?: Section[];
}

interface Section {
  sectionName: string;
  sectionOrder?: number;
  sectionAttributes?: Attribute[];
}

interface Attribute {
  attributeName: string;
  attributeRequired?: boolean;
  attributeEdit: EditType;
  attributeView: ViewType;
  attributeOptions?: Option[];
}

interface Option {
  optionName: string;
  optionTagColor?: string;
}

export default Template;
