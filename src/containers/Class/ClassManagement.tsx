import React, { memo, useCallback } from 'react'
import { areEqual } from '../../utils/equalChecks'
import { Button } from '../../components/Button'
import { DragAndDropTable } from '../../components/Classes';
import { classes } from '../../utils/data';
import { AiOutlinePlusCircle } from "react-icons/ai"


const ClassManagement = () => {
  const tableHeadings = ['class arm', 'pupils', 'boarders', 'day', 'data completion', 'class teacher', '']
  const onButtonClick = useCallback((e: any) => {
    e.preventDefault();
    console.log("all")
  }, []);
  return (
    <div className='block px-5 py-5 justify-between relative'>
      <div className='shadow-lg flex items-center gap-4 text-main-col text-xl bg-main-col w-fit p-2 rounded-xl'>
        <span className="text-white">Class management</span>
      </div>
      <div className='flex items-center justify-between gap-4 text-main-col text-sm my-5 pt-4'>
        <select className="text-xs p-2 rounded-[5px]">
          <optgroup>
            <option>Third term 2022/2023</option>
            <option>Second term 2022/2023</option>
            <option>First term 2022/2023</option>
          </optgroup>
        </select>
        <span>showing 15 class arms</span>
        <span>
          <Button
            onButtonClick={onButtonClick}
            title="New class arm"
            disabled={false}
            icon={<AiOutlinePlusCircle />} />
        </span>
      </div>
      <div>
        <DragAndDropTable tableHeadings={tableHeadings} data={classes} type="classes" />
      </div>
    </div>
  )
}

const ClassManagementMemo = memo(ClassManagement, areEqual)

export { ClassManagementMemo as ClassManagement }