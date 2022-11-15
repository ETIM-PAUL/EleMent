import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Tick } from '../../assets/Vector'
import { areEqual } from '../../utils/equalChecks'


const Completed = () => {
  return (
    <div className="bg-white shadow-2xl w-[600px] rounded-normal mx-auto my-7">
      <div className="py-4 px-5 text-start block">
        <div className='h-[70px] w-[70px] rounded-[50%] flex m-auto bg-white shadow-2xl'>
          <span className='flex justify-center items-center m-auto'>
            <Tick />
          </span>
        </div>
        <div className="w-[400px] mx-auto my-4">
          <h1 className='text-2xl font-semibold text-center text-main-col'>Payment confirmed</h1>
          <p className=' text-center m-2.5 '>
            The pupil's guardian/parent should check their mail for details concerning the payment.
          </p>
          <Link to="/home" className='text-main-col flex justify-center underline m-2.5 hover:cursor-pointer'>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
const CompletedMemo = memo(Completed, areEqual)
export { CompletedMemo as Completed }