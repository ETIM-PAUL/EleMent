import React, { memo } from 'react'
import { areEqual } from '../../utils/equalChecks'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { TableHead } from '@mui/material';
import { RiDeleteBin2Fill } from "react-icons/ri"
import { HiOutlineChevronLeft } from "react-icons/hi"
import { HiOutlineChevronRight } from "react-icons/hi"
import { FiEdit } from "react-icons/fi"
import { subjects } from '../../utils/data';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}
const headings = ['name', 'short name', 'actions']

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {/* {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />} */}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <HiOutlineChevronRight /> : <HiOutlineChevronLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <HiOutlineChevronLeft /> : <HiOutlineChevronRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {/* {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />} */}
      </IconButton>
    </Box>
  );
}
const rows = subjects.sort((a, b) => (a.shortName < b.shortName ? -1 : 1));

const SubjectsTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    // <div className='p-5 bg-white'>
    <TableContainer component={Paper} style={{ borderRadius: "20px" }}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead >
          <TableRow >
            {headings.map((item: any) => (
              <TableCell style={{ fontWeight: "600", color: "#293462" }} align="left" className='capitalize text-[15px] font-bold'>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((subject) => (
            <TableRow key={subject.shortName}>
              <TableCell component="th" scope="row" style={{ width: 60 }}>
                {subject.name}
              </TableCell>
              <TableCell style={{ width: 60 }} align="left">
                {subject.shortName}
              </TableCell>
              <TableCell style={{ width: 60 }} align="left">
                <div className='flex gap-4'>
                  <div className="flex items-center  hover:cursor-pointer">
                    <FiEdit />
                    <span className='text-[#4F4F4F] pl-1'>Edit</span>
                  </div>
                  <div className="flex items-center text-[#D61C4E] hover:cursor-pointer">
                    <RiDeleteBin2Fill />
                    <span className="pl-1">Delete</span>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    // </div>
  )
}

const SubjectsTableMemo = memo(SubjectsTable, areEqual)
export { SubjectsTableMemo as SubjectsTable }