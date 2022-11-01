import React, { memo, useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { cards, bestStudents } from '../../utils/data';
import { areEqual } from '../../utils/equalChecks';
import { NavHeading } from '../NavHeading';
import { ProfileIcon } from '../../assets/profile';
import "./dashboard.css";
import { TableData } from '../Table';

type Card = {
  number: string,
  title: string,
  icon: JSX.Element,
  index: number,
}
const Dashboard = () => {

  const [slide, setSlide] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [showPrevBtn, setShowPrevBtn] = useState(false);
  const moveSlide = (type: string) => {
    if (type === "next") {
      setSlide(slide + 1);
      if (slide === 2) {
        setShowNextBtn(false);
      }
      setShowPrevBtn(true);
    }
    if (type === "prev") {
      setSlide(slide - 1);
      if (slide === 1) {
        setShowPrevBtn(false);
      }
      setShowNextBtn(true);
    }
  }
  return (
    <div className='block relative px-6 my-5'>
      <div className="flex flex-wrap justify-between py-3 mr-5 gap-6">
        {cards.map((card: Card) => (
          <div key={card.index} className="relative h-fit">
            <div className="below-box"></div>
            <div className='shadow-box-shadow w-48 grid h-32 mb-3 py-5 rounded-normal bg-white absolute top-[-0.1rem]'>
              <span className='px-5'>{card.icon}</span>
              <span className="text-main-col font-bold px-5">{card.number}</span>
              <span className="text-sm text-secondary-col px-5">{card.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='my-5 bg-white rounded-normal p-5'>
        <div className="flex justify-between items-center">
          <span className="font-medium">Top performing students</span>
          <div className="items-center flex gap-2">
            {showPrevBtn &&
              <IoIosArrowDropleft className="text-xl text-[#d9d9d9] hover:cursor-pointer" onClick={() => moveSlide("prev")} />
            }
            {
              showNextBtn &&
              <IoIosArrowDropright className="text-xl text-[#d9d9d9] hover:cursor-pointer" onClick={() => moveSlide("next")} />
            }
          </div>
        </div>
        <hr className=" my-6" />
        <div className="flex justify-between items-center w-[80%]">
          <div className="flex gap-3 items-center">
            <ProfileIcon width="80" height="80" />
            <div className="grid gap-2">
              <span className='text-main-col text-2xl font-medium'>{bestStudents[slide].name}</span>
              <span className='text-main-col text-'>{bestStudents[slide].class}</span>
            </div>
          </div>
          <div className="grid gap-2">
            <span className='text-main-col text-xs font-medium mb-2'>{bestStudents[slide].email}</span>
            <span className='text-main-col text-xs'>{bestStudents[slide].mobile}</span>
          </div>
        </div>
        <hr className=" my-6" />
        <div className="flex justify-between text-xs items-center">
          <div className='flex items-center gap-4'>
            <div className='bg-main-bg py-2 px-4  rounded-lg text-white w-fit hover:cursor-default'>As Third term 2021/2022</div>
            <span>{bestStudents[slide].details}</span>
          </div>
          <div className='flex gap-2'>
            <div className='bg-main-bg py-2 px-4  rounded-lg text-white w-fit hover:cursor-default'>View full result</div>
            <div className='bg-white py-2 px-4  rounded-lg text-main-col border-[1px] border-[#645CAA] w-fit hover:cursor-default'>Go to profile</div>
          </div>
        </div>
      </div>
      <div>
        <h3 className='font-semibold'>Class overview</h3>
        <TableData />
      </div>
    </div>
  )
}

const DashboardMemo = memo(Dashboard, areEqual)

export { DashboardMemo as Dashboard }