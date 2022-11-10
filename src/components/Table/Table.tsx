import React, { memo } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { areEqual } from '../../utils/equalChecks'
import "./table.css"

type Data = {
  title: string,
  noOfPupils: number,
  boarders: number,
  day: number,
  dataCompletion: number,
}

type Props = {
  headings: Array<string>
  data: Array<object>
}

const TableData = ({ headings, data }: Props) => {
  return (
    <TableContainer component={Paper} className="my-5" style={{ borderRadius: "20px" }}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            {headings.map((item: any) => (
              <TableCell style={{ fontWeight: "600", color: "#293462" }} align="left" className='capitalize'>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any, index: any) => (
            <TableRow key={index}>
              <TableCell align="left" scope="row" style={{ fontWeight: "500", color: "#645CAA" }}>
                {row.title}
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "500", color: "#645CAA" }}>
                {row.noOfPupils}
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "500", color: "#645CAA" }}>{row.boarders}</TableCell>
              <TableCell align="left" style={{ fontWeight: "500", color: "#645CAA" }}>{row.day}</TableCell>
              {row.dataCompletion !== 0 &&
                <TableCell align="left" style={{ fontWeight: "500", color: "#645CAA" }}>
                  <div className='grid'>
                    <span>{row.dataCompletion}%</span>
                    <input type="range" value={row.dataCompletion} className="h-[5px] w-[200px]" />
                  </div>
                </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const TableMemo = memo(TableData, areEqual)
export { TableMemo as TableData }