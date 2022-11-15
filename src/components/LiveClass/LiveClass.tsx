import React, { memo } from 'react'
import { Live } from '../../assets/live'
import { areEqual } from '../../utils/equalChecks'
import { Button } from '../Button'
import { TbArrowsJoin } from "react-icons/tb"
import { BsKeyboardFill } from "react-icons/bs"
import { InputField } from '../Input'

const LiveClassIn = () => {
  return (
    <div className='my-4 md:mt-16 block relative p-6'>
      <div className="flex justify-around">
        <div className='w-[60%] md:mt-12 ml-4 font-normal'>
          <p className="text-5xl ">Premium Live Classes.</p>
          <p className="text-5xl py-2">Now free all registered Pupils.</p>
          <p className="text-xl sans-serif py-8 w-[75%] text-zinc-500">This service was re-engineered and built to aid in the learning process of all pupils who can't make to school, either on a sick day, town emergency, or any inconvenience</p>
          <div className='my-2 flex gap-3 items-center'>
            {/* <InputField /> */}
            <div className='max-w-[200px]'>
              <div className="w-[100%] relative ">
                <BsKeyboardFill className="absolute top-5 ml-2 text-2xl" />
                <input placeholder="Enter Roll No" type="number" name="rollNo" required={false} className="my-[10px] h-full w-full bg-white rounded-[10px] h-[35px] py-3 px-9 border-[#645CAA] border" />
              </div>
            </div>
            <Button title="Join" disabled={false} icon={<TbArrowsJoin />} onButtonClick={() => console.log("Do Nothing")} />
          </div>
          <div className="w-[80%] h-[1px] bg-zinc-500 mt-10" />
        </div>
        <div className='grid items-center justify-items-center place-center w-[40%]'>
          <Live />
          <span className="font-semibold text-2xl my-2">Join with your roll number.</span>
          <span className=" text-start">
            You can ask questions, interact,
          </span>
          <span className=" text-start">
            with other pupils as well as the teacher.
          </span>
        </div>
      </div>
    </div>
  )
}
const LiveClassInMemo = memo(LiveClassIn, areEqual)
export { LiveClassInMemo as LiveClassIn }