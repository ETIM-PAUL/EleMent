import React, { memo } from 'react'
import { areEqual } from '../../utils/equalChecks'
import { GoPrimitiveDot } from "react-icons/go"
import { IoIosArrowForward } from "react-icons/io"
import { ProfileIcon } from '../../assets/profile';
import { Noty } from '../../assets/noty';

type NavHeading = {

}
const NavHeading = () => {
  return (
    <><div className='flex px-5 py-5 justify-between'>
      <div className='flex items-center gap-4 text-main-col text-xs'>
        <span className="text-[#1CD6CE]"><GoPrimitiveDot /></span>
        <span className="text-black">Current term</span>
        <span><IoIosArrowForward /></span>
        <span>First term 2021/2022</span>
      </div>
      <div className='flex items-center gap-4'>
        <div className='relative'>
          <Noty />
          <span className="text-red-600 absolute bottom-3 left-3"><GoPrimitiveDot /></span>
        </div>
        <ProfileIcon width="30" height="30" />
      </div>
    </div>
      <div className='bg-gray-300 h-[1px] mx-5' />
    </>
  )
}

const NavHeadingMemo = memo(NavHeading, areEqual)

export { NavHeadingMemo as NavHeading }