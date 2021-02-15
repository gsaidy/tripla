import Template from 'interfaces/template';
import Section from 'interfaces/section';
import Attribute from 'interfaces/attribute';
import Option from 'interfaces/option';
import EditType from 'enums/editType';
import ViewType from 'enums/viewType';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapTemplate = ({ name, description, sections }: Template) => ({
  name,
  description,
  sections: mapSections(sections),
});

const mapSections = (sections?: Section[]) => {
  if (sections) {
    return {
      data: sections.map(({ name, order, attributes }: Section) => ({
        name,
        order,
        attributes: mapAttributes(attributes),
      })),
    };
  }
  return;
};

const mapAttributes = (attributes?: Attribute[]) => {
  if (attributes) {
    return {
      data: attributes.map(({ name, required, edit, view, options }: Attribute) => ({
        name,
        required,
        edit,
        view,
        options:
          edit === EditType.Select || view === ViewType.Tag ? mapOptions(options) : undefined,
      })),
    };
  }
  return;
};

const mapOptions = (options?: Option[]) => {
  if (options) {
    return {
      data: options.map(({ name, color }: Option) => ({
        name,
        color,
      })),
    };
  }
  return;
};
