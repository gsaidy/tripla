import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { Form } from 'antd';
import { NamePath } from 'antd/lib/form/interface';
import { useLazyQuery } from '@apollo/client';

import BasicInfo from '../molecules/BasicInfo';
import TemplateDeletedAlert from '../molecules/TemplateDeletedAlert';
import Trip from 'interfaces/trip';
import FormMode from 'enums/formMode';
import BackToList from '../../Utilities/BackToList';
import EntityType from 'enums/entityType';
import GET_TEMPLATE_SECTIONS from 'gql/queries/getTemplateSections';
import TripSections from '../../TripSections/TripSections';
import { showLoadingMessage, showErrorMessage, hideLoadingMessage } from 'utils/feedback';
import Section from 'interfaces/section';

export const TripFormContext = createContext<{
  formMode: FormMode;
  getFieldValue: (name: NamePath) => unknown;
  setFieldsValue: (values: unknown) => void;
  resetFields: (fields?: NamePath[]) => void;
}>({
  formMode: FormMode.Create,
  getFieldValue: (name: NamePath) => name,
  setFieldsValue: (values: unknown) => values,
  resetFields: (fields?: NamePath[]) => fields,
});

const TripForm: FC<{
  formMode: FormMode;
  tripInitialData?: Trip;
  children?: ReactNode;
  onSubmit: (trip: Trip) => void;
}> = ({ formMode, tripInitialData, children, onSubmit }) => {
  const [form] = Form.useForm();
  const [
    getTemplateSections,
    { loading: templateSectionsLoading, error: templateSectionsError, data: templateSectionsData },
  ] = useLazyQuery(GET_TEMPLATE_SECTIONS);
  const [sections, setSections] = useState<Section[] | null>(
    formMode === FormMode.Create ? null : tripInitialData?.template?.sections ?? null
  );

  useEffect(() => {
    if (templateSectionsLoading) {
      showLoadingMessage('Loading template sections...');
    } else if (templateSectionsError) {
      showErrorMessage('Error fetching template sections.');
    } else if (templateSectionsData) {
      hideLoadingMessage();
      form.setFieldsValue({ data: [] });
      setSections(templateSectionsData.templates_by_pk.sections);
    }
  }, [templateSectionsLoading, templateSectionsError, templateSectionsData, form]);

  if (formMode !== FormMode.Create && !tripInitialData?.templateId) {
    form.setFieldsValue({ data: undefined });
  }

  const onTemplateSelect = (id: number) => {
    getTemplateSections({
      variables: { id },
    });
  };

  return (
    <TripFormContext.Provider
      value={{
        formMode,
        getFieldValue: form.getFieldValue,
        setFieldsValue: form.setFieldsValue,
        resetFields: form.resetFields,
      }}
    >
      {formMode === FormMode.View && <BackToList href="/trips" entity={EntityType.Trip} />}
      <Form
        className="space-y-4"
        form={form}
        initialValues={tripInitialData}
        labelCol={{ span: 6 }}
        requiredMark={formMode !== FormMode.View}
        onFinish={onSubmit}
      >
        <BasicInfo
          user={tripInitialData ? tripInitialData.user : undefined}
          onTemplateSelect={onTemplateSelect}
        />
        {formMode !== FormMode.Create &&
          !tripInitialData?.templateId &&
          !form.getFieldValue('templateId') && <TemplateDeletedAlert />}
        {sections && <TripSections sections={sections} />}
        {children}
      </Form>
    </TripFormContext.Provider>
  );
};

export default TripForm;
