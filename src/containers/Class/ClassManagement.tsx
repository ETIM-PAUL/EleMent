import React, { memo } from 'react'
import { areEqual } from '../../utils/equalChecks'
import { Button } from '../../components/Button'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TableData } from '../../components/Table';
import { amber } from '@mui/material/colors';
import { classes } from '../../utils/data';
import { ClassesTable } from '../../components/Classes';

const ClassManagement = () => {
  const tableHeadings = ['class arm', 'pupils', 'boarders', 'day', 'data completion', 'class teacher', '']
  return (
    <div className='block px-5 py-5 justify-between relative'>
      <div className='flex items-center gap-4 text-main-col text-xs'>
        <span className="text-black">Class management</span>
      </div>
      <div className='flex items-center justify-between gap-4 text-main-col text-sm my-5'>
        <select className="text-xs p-2 rounded-[5px]">
          <optgroup>
            <option>Third term 2022/2023</option>
            <option>Second term 2022/2023</option>
            <option>First term 2022/2023</option>
          </optgroup>
        </select>
        <span>showing 15 class arms</span>
        <span><Button title="New class arm" /></span>
      </div>
      <div>
        <ClassesTable />
      </div>
    </div>
  )
}

const ClassManagementMemo = memo(ClassManagement, areEqual)

export { ClassManagementMemo as ClassManagement }