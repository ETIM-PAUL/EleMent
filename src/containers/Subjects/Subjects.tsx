import React, { memo } from 'react'
import { Button } from '../../components/Button'
import { DragAndDropTable } from '../../components/Classes'
import { SubjectsTable } from '../../components/Subjects'
import { classes } from '../../utils/data'
import { areEqual } from '../../utils/equalChecks'

const Subjects = () => {
  return (
    <div className='block px-5 py-2 justify-between relative'>
      <div className='flex items-center justify-between gap-4 text-main-col text-sm pt-4'>
        <div className='shadow-lg flex items-center gap-4 text-main-col text-xl bg-main-col w-fit p-2 rounded-xl'>
          <span className="text-white">Subjects</span>
        </div>
        <span><Button title="Create a Object" /></span>
      </div>
      <div className='relative block my-6'>
        <SubjectsTable />
      </div>
    </div>
  )
}

const SubjectsMemo = memo(Subjects, areEqual)
export { SubjectsMemo as Subjects }