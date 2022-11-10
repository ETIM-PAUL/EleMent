import React, { memo, useCallback } from 'react'
import { areEqual } from '../../utils/equalChecks'
import { yupProfileValidation } from '../../utils/yupValidation';
import { InputField, Select } from '../Input';
import { Formik, Form } from "formik";
import { TiCancel } from "react-icons/ti"
import { MdNextPlan } from "react-icons/md";
import { Button } from '../Button';

interface Props {
  setCurrentStep: (e: any) => void
  currentStep: any
}
const Profile = ({ setCurrentStep, currentStep }: Props) => {
  const classes = ["Nursery 1", "Nursery 2", "Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5"]
  const nextStep = useCallback((e: any) => {
    e.preventDefault();
    setCurrentStep("Bill Info");
  }, []);
  const cancelPayment = useCallback((e: any) => {
    e.preventDefault();
    setCurrentStep("Pupil Info");
  }, []);
  return (
    <div className='w-[700px] mx-auto my-4 rounded-normal bg-whit p-3 '>
      <Formik
        validateOnMount
        initialValues={{
          name: "",
          email: "",
          address: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(true);
            console.log(values)
          }, 1000);
        }}
        validationSchema={yupProfileValidation}
      >
        {({ setFieldValue, isValid }) => {
          return (
            <Form>
              <InputField
                label="Name"
                placeholder="Please input pupil's name"
                type="text"
                name="name"
                required={true}
                asterisk="*"
              />
              <InputField
                label="Email Address"
                placeholder="Please input pupil's email"
                type="email"
                required={true}
                name="email"
                asterisk="*"
              />
              <InputField
                label="Address"
                name="address"
                placeholder="Please input pupil's primary address"
                type="text"
                required={true}
                asterisk="*"
              />
              <div className="select-InputField-flex">
                <Select
                  label="Class"
                  name="class"
                  required={true}
                  asterisk="*"


                >
                  {classes.map((item, index) => {
                    return (
                      <option key={index}>{item}</option>
                    );
                  })}
                </Select>
              </div>
              <div className="flex gap-2 my-2">
                {currentStep !== "Pupil Info" &&
                  <Button
                    disabled={false}
                    title="Cancel Payment"
                    icon={<TiCancel />}
                    onButtonClick={cancelPayment}
                  />
                }
                <Button
                  title="Next"
                  disabled={!isValid}
                  icon={<MdNextPlan />}
                  onButtonClick={nextStep}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  )
}

const ProfileMemo = memo(Profile, areEqual)
export { ProfileMemo as Profile }