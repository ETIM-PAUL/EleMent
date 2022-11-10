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
const Bill = ({ setCurrentStep, currentStep }: Props) => {
  const bills = ["School Fee", "Lesson Fee", "PTA Levy", "Transportaion Fee", "Sports Wear Levy",]
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
          tellerNumber: "",
          date: "",
          billType: "",
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
                label="Bank Teller Number"
                placeholder="Please input teller no"
                type="text"
                name="tellerNumber"
                required={true}
                asterisk="*"
              />
              <InputField
                label="Date of Payment"
                placeholder="Please input date, payment was made"
                type="date"
                required={true}
                name="DOP"
                asterisk="*"
              />
              <div className="select-InputField-flex">
                <Select
                  label="Bill Type"
                  name="billType"
                  required={true}
                  asterisk="*"
                >
                  {bills.map((item, index) => {
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

const BillMemo = memo(Bill, areEqual)
export { BillMemo as Bill }