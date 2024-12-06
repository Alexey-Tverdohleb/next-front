'use client';

import { FC } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';

import { tokenApi } from '@/api/tokenApi';
import { IForm, IFormValues } from '@/forms/MintingForm/types';
import INITIAL_VALUES from '@/forms/MintingForm/initialValues';
import SuccessModal from '@/forms/MintingForm/SuccessModal';
import useToggle from '@/hooks/useToggle/useToggle';

const MintingForm: FC<IForm> = ({ children }) => {
  const [isSuccessModal, toggleSuccessModal] = useToggle({ initial: false });

  const { data: tokens } = tokenApi.useFetchTokensQuery();

  const initialValues: IFormValues = { ...INITIAL_VALUES, token: tokens?.at(0) };

  const onSubmit = async (values: IFormValues, formikActions: FormikHelpers<IFormValues>) => {
    try {
      // TODO: connect to crypto wallet
      console.log(values);
      formikActions.resetForm();
      toggleSuccessModal();
    } catch (error) {
      console.error(error);
    }

    formikActions.setSubmitting(false);
  };

  return (
    <>
      <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
        <Form>{children}</Form>
      </Formik>
      <SuccessModal isShown={isSuccessModal} onClose={toggleSuccessModal} />
    </>
  );
};

export default MintingForm;
