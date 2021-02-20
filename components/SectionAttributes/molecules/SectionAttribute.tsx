import { FC, useState, useContext } from 'react';

import AttributeHeader from '../atoms/AttributeHeader';
import AttributeName from '../atoms/AttributeName';
import AttributeRequired from '../atoms/AttributeRequired';
import AttributeEdit from '../atoms/AttributeEdit';
import AttributeView from '../atoms/AttributeView';
import AttributeOptions from '../../AttributeOptions/AttributeOptions';
import EditType from 'enums/editType';
import ViewType from 'enums/viewType';
import { TemplateFormContext } from '../../Templates/organisms/TemplateForm';

const SectionAttribute: FC<{
  index: number;
  parentName: number;
  name: number;
  removeAttribute: () => void;
}> = ({ index, parentName, name, removeAttribute }) => {
  const { getFieldValue } = useContext(TemplateFormContext);
  const chainedName = ['sections', parentName, 'attributes', name];
  const [editValue, setEditValue] = useState(getFieldValue([...chainedName, 'edit']));
  const [viewValue, setViewValue] = useState(getFieldValue([...chainedName, 'view']));

  return (
    <>
      <AttributeHeader title={`Attribute ${index + 1}`} removeAttribute={removeAttribute} />
      <div className="grid grid-cols-6 gap-x-2 mt-2 xs:mt-6 mb-1">
        <AttributeName parentName={name} />
        <AttributeRequired parentName={name} />
        <AttributeEdit parentName={name} setValue={setEditValue} />
        <AttributeView parentName={name} setValue={setViewValue} />
      </div>
      {(editValue === EditType.Select || viewValue === ViewType.Tag) && (
        <AttributeOptions parentName={name} showTagColor={viewValue === ViewType.Tag} />
      )}
    </>
  );
};

export default SectionAttribute;
