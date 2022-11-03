import React, { memo, useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { pupilsPerfomance } from '../../utils/data';
import { areEqual } from '../../utils/equalChecks'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    text: {
      primary: '#645CAA',
      secondary: '#46505A',
    },
  },
});

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
    <div className='bg-white rounded-normal py-4 my-5'>
      <FormControl sx={{ color: '#645CAA', mx: 5, mb: 2, minWidth: 250, font: 10 }} size="small">
        <InputLabel id="demo-select-small">Session</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          label="Session"
          onChange={(e) => handleChange(e)}
          sx={{ color: '#645CAA' }}
        >
          <MenuItem sx={{ color: '#645CAA' }} value="Third term 2022/2023">
            Third term 2022/2023
          </MenuItem>
          <MenuItem sx={{ color: '#645CAA' }} value="Second term 2022/2023">Second term 2022/2023</MenuItem>
          <MenuItem sx={{ color: '#645CAA' }} value="First term 2022/2023">First term 2022/2023</MenuItem>
        </Select>
      </FormControl>

      {/* Chart */}
      <LineChart width={800} height={450} data={pupilsPerfomance} >
        {/* <Legend /> */}
        <CartesianGrid strokeDasharray="3" />

        <XAxis dataKey="name" />
        <YAxis dataKey="uv" />
        <Line type="monotone" dot={false} dataKey={dataa} stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </div>

  )
}

const ChartMemo = memo(Chart, areEqual)
export { ChartMemo as Chart }