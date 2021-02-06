export interface Template {
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
  attributeEdit: string;
  attributeView: string;
  attributeOptions?: Option[];
}

interface Option {
  optionName: string;
  optionTagColor?: string;
}
