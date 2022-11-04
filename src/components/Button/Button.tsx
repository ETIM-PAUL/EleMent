import React, { memo } from 'react'
import { areEqual } from '../../utils/equalChecks'
import { AiOutlinePlusCircle } from "react-icons/ai"

type Props = {
  title: string;
}

const Button = ({ title }: Props) => {
  return (
    <div className="bg-main-col text-white flex items-center p-2 rounded-[10px] gap-1 hover:cursor-pointer hover:bg-[#6c60e2]">
      <AiOutlinePlusCircle />
      {title}
    </div>
  )
}

const ButtonMemo = memo(Button, areEqual)
export { ButtonMemo as Button }