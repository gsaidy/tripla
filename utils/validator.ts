import Template from 'interfaces/template';
import EditType from 'enums/editType';
import ViewType from 'enums/viewType';

export const validateAtLeastOneAttributeAndOption = ({ sections = [] }: Template): string[] => {
  const validationErrors: string[] = [];
  sections.forEach(({ name: sectionName, attributes }) => {
    if (!attributes || attributes.length === 0) {
      validationErrors.push(`Section ${sectionName} must have at least one attribute.`);
      return;
    }
    attributes.forEach(({ name: attributeName, edit, view, options }) => {
      if (
        (edit === EditType.Select || view === ViewType.Tag) &&
        (!options || options.length === 0)
      ) {
        validationErrors.push(
          `Section ${sectionName} attribute ${attributeName} must have at least one option.`
        );
      }
    });
  });
  return validationErrors;
};
