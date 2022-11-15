import React, { memo, useCallback } from 'react'
import { IoMdPrint } from 'react-icons/io'
import { MdNextPlan } from 'react-icons/md'
import { TiCancel } from 'react-icons/ti'
import { areEqual } from '../../utils/equalChecks'
import { Button } from '../Button'

interface Props {
  setCurrentStep: (e: any) => void
  currentStep: any
}

const ConfirmPayment = ({ setCurrentStep, currentStep }: Props) => {
  const cancelPayment = useCallback((e: any) => {
    e.preventDefault();
    setCurrentStep("Pupil Info");
  }, []);
  const completePayment = useCallback((e: any) => {
    e.preventDefault();
    setCurrentStep("Completed");
  }, []);
  return (
    <div>
      <div className="w-[700px] my-7 mx-auto bg-white rounded-normal">
        <div className="block pb-8 ">
          <div className="bg-main-bg rounded-normal">
            <div className="flex justify-between py-5 items-center text-white gap-2 w-[450px] m-auto font-semibold">
              <span>Ibrahim Musa</span>
              <span>Nursery 2B</span>
            </div>
          </div>
          <div>
            <div className="bg-white text-main-col flex justify-between py-5 items-center text-white gap-2 w-[450px] m-auto font-semibold">
              <span className="">PTA Levy</span>
              <span className="">&#8358;20,000</span>
            </div>
            <div className="bg-white text-main-col flex justify-between py-5 items-center text-white gap-2 w-[450px] m-auto font-semibold">
              <span className="">10% Tax</span>
              <span className="">&#8358;2000</span>
            </div>
          </div>
          <div className="w-[600px] h-[1px] bg-[#817e9e] my-4 mx-auto"></div>
          <div className="flex border-1 justify-between items-center rounded-[10px] gap-[1rem] w-[450px] mx-auto text-main-col">
            <span>Total</span>
            <span className="font-semibold">22,000.00</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 my-2 justify-center">
        {currentStep !== "Pupil Info" &&
          <Button
            disabled={false}
            title="Cancel Payment"
            icon={<TiCancel />}
            onButtonClick={cancelPayment}
          />
        }
        <Button
          title="Print Receipt"
          disabled={false}
          icon={<IoMdPrint />}
          onButtonClick={completePayment}
        />
      </div>
    </div>
  )
}

const ConfirmPaymentMemo = memo(ConfirmPayment, areEqual);
export { ConfirmPaymentMemo as ConfirmPayment }