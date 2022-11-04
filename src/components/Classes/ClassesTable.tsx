import React, { memo, useCallback, useState } from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import { areEqual } from '../../utils/equalChecks'
import { classes } from '../../utils/data';
import { ClassRow } from './ClassRow';

interface Class {
  title: string,
  noOfPupils: number,
  boarders: number,
  day: number,
  dataCompletion: number,
  classTeacher: string,
  teacherInitials: string,
}

const ClassesTable = () => {
  const tableHeadings = ['class arm', 'pupils', 'boarders', 'day', 'data completion', 'class teacher', '']
  const [classesData, setClassesData] = useState(classes)
  const moveCard = useCallback(
    (dragIndex: any, hoverIndex: any) => {
      const dragCard = classesData[dragIndex];
      setClassesData(
        update(classesData, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [classesData]
  );
  return (
    <div>
      {/* Table */}
      <div className="">
        {/* Table Heading */}
        <div className="grid grid-cols-tableGridHead text-[#696969] capitalize text-[13px] px-2 font-sans  pt-2">

          {tableHeadings.map((item: string, index) => (
            <span key={index} className="text-[15px] font-bold">{item}</span>
          ))}

        </div>
        {/* Table Body */}
        <DndProvider backend={HTML5Backend}>
          {classesData.map((item: Class, index) => (
            <ClassRow
              key={index}
              index={index}
              moveCard={moveCard}
              item={item}
            />
          ))}
        </DndProvider>
      </div>
    </div>
  )
}


const ClassesTableMemo = memo(ClassesTable, areEqual)
export { ClassesTableMemo as ClassesTable }