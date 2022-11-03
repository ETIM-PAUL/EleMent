import React, { memo } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { areEqual } from '../../utils/equalChecks'
import { classOverview } from '../../utils/data';
import "./table.css"

type Data = {
  title: string,
  noOfPupils: number,
  boarders: number,
  day: number,
  dataCompletion: number,
}

// const TableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

const TableData = () => {
  return (
    <TableContainer component={Paper} className="my-5" style={{ borderRadius: "20px" }}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead className="">
          <TableRow >
            <TableCell style={{ fontWeight: "600", color: "#293462" }}>Class</TableCell>
            <TableCell style={{ fontWeight: "600", color: "#293462" }} align="left">Pupils</TableCell>
            <TableCell style={{ fontWeight: "600", color: "#293462" }} align="left">Boarders</TableCell>
            <TableCell style={{ fontWeight: "600", color: "#293462" }} align="left">Day</TableCell>
            <TableCell style={{ fontWeight: "600", color: "#293462" }} align="left">Student data completion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {classOverview.map((row: Data, index: any) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" style={{ fontWeight: "500", color: "#645CAA" }}>
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
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const TableMemo = memo(TableData, areEqual)
export { TableMemo as TableData }