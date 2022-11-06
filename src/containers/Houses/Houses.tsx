import React, { memo } from 'react'
import { DragAndDropTable } from '../../components/Classes'
import { houses } from '../../utils/data'
import { areEqual } from '../../utils/equalChecks'

const Houses = () => {
  const tableHeadings = ['house name', 'house color', 'no of pupils', 'house master/mistress']

  return (
    <div className='block px-5 py-5 justify-between relative'>
      <div className='shadow-lg flex items-center gap-4 text-main-col text-xl bg-main-col w-fit p-2 rounded-xl'>
        <span className="text-white">Houses</span>
      </div>
      <div className="relative my-5">
        <DragAndDropTable tableHeadings={tableHeadings} data={houses} type="houses" />
      </div>
    </div>
  )
}

const HousesMemo = memo(Houses, areEqual)
export { HousesMemo as Houses }