import { FC } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';

import { IForm, TFormValues } from '@/forms/TradesLimitForm/types';
import { INITIAL_VALUES } from '@/forms/TradesLimitForm/initialValues';

const TradesLimitForm: FC<IForm> = ({ children }) => {
  const onSubmit = async (values: TFormValues, formikActions: FormikHelpers<TFormValues>) => {
    try {
      // TODO: implement mutation
      console.log(values);
      formikActions.resetForm();
    } catch (error) {
      console.error(error);
    }

    formikActions.setSubmitting(false);
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
      <Form>{children}</Form>
    </Formik>
  );
};

export default TradesLimitForm;
