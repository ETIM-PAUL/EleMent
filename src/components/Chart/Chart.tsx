import React, { memo, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { pupilsPerfomance } from '../../utils/data';
import { areEqual } from '../../utils/equalChecks'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Chart = () => {
  const [dataa, setDataa] = useState("uv");
  const handleChange = (event: any) => {
    const selectedSession = event.target.value;
    if (selectedSession == 'Third term 2022/2023') {
      setDataa("uv");
    }
    if (selectedSession == 'Second term 2022/2023') {
      setDataa("pv");

    }
    if (selectedSession == 'First term 2022/2023') {
      setDataa("amt");
    }
  };

  return (
    <div className='bg-white rounded-normal py-4 my-5 text-main-col'>
      <select
        onChange={(e) => handleChange(e)}
        className="text-xs p-1 rounded-[5px] mx-8 mb-2 border-[1px]">
        <optgroup>
          <option value="Third term 2022/2023">Third term 2022/2023</option>
          <option value="Second term 2022/2023">Second term 2022/2023</option>
          <option value="First term 2022/2023">First term 2022/2023</option>
        </optgroup>
      </select>

      {/* Chart */}
      <ResponsiveContainer height={450}>

        <LineChart data={pupilsPerfomance} margin={{ top: 20, right: 50, left: 0, bottom: 0 }}>
          {/* <Legend /> */}
          <CartesianGrid strokeDasharray="3" />

          <XAxis dataKey="name" />
          <YAxis dataKey="uv" />
          <Line type="monotone" dot={false} dataKey={dataa} stroke="#645CAA" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>

  )
}

const ChartMemo = memo(Chart, areEqual)
export { ChartMemo as Chart }