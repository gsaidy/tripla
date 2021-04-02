import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { Form } from 'antd';
import { NamePath } from 'antd/lib/form/interface';
import { useLazyQuery } from '@apollo/client';

import BasicInfo from '../molecules/BasicInfo';
import Trip from 'interfaces/trip';
import FormMode from 'enums/formMode';
import BackToList from '../../Utilities/BackToList';
import EntityType from 'enums/entityType';
import GET_TEMPLATE_SECTIONS from 'gql/queries/getTemplateSections';
import TripSections from '../../TripSections/TripSections';

export const TripFormContext = createContext<{
  formMode: FormMode;
  getFieldValue: (name: NamePath) => unknown;
  resetFields: (fields?: NamePath[]) => void;
}>({
  formMode: FormMode.Create,
  getFieldValue: (name: NamePath) => name,
  resetFields: (fields?: NamePath[]) => fields,
});

const TripForm: FC<{
  formMode: FormMode;
  tripInitialData?: Trip;
  children?: ReactNode;
  onSubmit: (trip: Trip) => void;
}> = ({ formMode, tripInitialData, children, onSubmit }) => {
  const [form] = Form.useForm();
  const [getTemplateSections, { data: templateSectionsData }] = useLazyQuery(GET_TEMPLATE_SECTIONS);
  const [sections, setSections] = useState<Section[] | null>(null);

  useEffect(() => {
    if (templateSectionsData) {
      setSections(templateSectionsData.templates_by_pk.sections);
    }
  }, [templateSectionsData]);

  const onTemplateSelect = (id: number) => {
    getTemplateSections({
      variables: { id },
    });
  };

  return (
    <TripFormContext.Provider
      value={{ formMode, getFieldValue: form.getFieldValue, resetFields: form.resetFields }}
    >
      <Form
        className="space-y-4"
        form={form}
        initialValues={tripInitialData}
        labelCol={{ span: 6 }}
        requiredMark={formMode !== FormMode.View}
        onFinish={onSubmit}
      >
        {formMode === FormMode.View && <BackToList href="/trips" entity={EntityType.Trip} />}
        <BasicInfo
          user={tripInitialData ? tripInitialData.user : undefined}
          onTemplateSelect={onTemplateSelect}
        />
        {sections && <TripSections sections={sections} />}
        {children}
      </Form>
    </TripFormContext.Provider>
  );
};

export default TripForm;
