import React, { memo, useEffect, useState } from 'react'
import { Bill, ConfirmPayment, Profile } from '../../components/BillsPayment'
import { Completed } from '../../components/BillsPayment/Completed'
import { areEqual } from '../../utils/equalChecks'

const BillsPayment = () => {
  const steps = [`Pupil Info`, 'Bill Info', 'Confirm Payment']
  const [currentStep, setCurrentStep] = useState("Pupil Info")

  return (
    <div className='block px-5 py-5 justify-between relative'>
      <div className='shadow-lg flex items-center gap-4 text-main-col text-xl bg-main-col w-fit p-2 rounded-xl'>
        <span className="text-white">Bills Payment</span>
      </div>
      {currentStep !== "Completed" &&
        <>
          <div className="flex w-[700px] justify-between items-center my-6 m-auto">
            {steps.map((step, id) => {
              return (
                <span
                  className={step === currentStep ? "text-main-col font-semibold" : 'text-black font-semibold'}
                  key={id}
                >
                  {step}
                  {step === currentStep && (
                    <div className="w-[137px] h-[10px] rounded-[10px] absolute bg-main-bg top-[132px]"></div>
                  )}
                </span>
              );
            })}
          </div>
          <div className="horizontal-line bg-black h-[1px] w-[700px] m-auto"></div>
        </>
      }
      {currentStep === "Pupil Info" &&
        <Profile
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      }
      {currentStep === "Bill Info" &&
        <Bill
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      }
      {currentStep === "Confirm Payment" &&
        <ConfirmPayment
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      }
      {currentStep === "Completed" &&
        <Completed
        />
      }
    </div>
  )
}

const BillsPaymentMemo = memo(BillsPayment, areEqual)
export { BillsPaymentMemo as BillsPayment }