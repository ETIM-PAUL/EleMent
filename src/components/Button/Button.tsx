import React, { memo } from 'react'
import { areEqual } from '../../utils/equalChecks'

interface Props {
  title: string;
  disabled: boolean;
  icon: JSX.Element;
  onButtonClick: (e: any) => void;
}

const Button = ({ title, onButtonClick, disabled, icon }: Props) => {
  return (
    <button disabled={disabled} onClick={onButtonClick} className={`bg-main-col text-white flex items-center p-2 rounded-[10px] gap-1 ${!disabled ? "cursor-pointer hover:bg-[#6c60e2]" : "cursor-not-allowed"}`}>
      {icon}
      <span className="font-semibold">{title}</span>
    </button>
  )
}

const ButtonMemo = memo(Button, areEqual)
export { ButtonMemo as Button }