import React, { memo, useCallback, useState } from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import { areEqual } from '../../utils/equalChecks'
import { ClassRow } from './ClassRow';

interface Class {
  title: string,
  noOfPupils: number,
  boarders: number,
  day: number,
  dataCompletion: number,
  classTeacher: string,
  teacherInitials: string,
  color: string,
  hex: string,
}

const DragAndDropTable = ({ ...props }) => {
  const [classesData, setClassesData] = useState(props.data)
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
      <div>
        {/* Table Heading */}
        <div className={`grid text-[#696969] capitalize text-[13px] px-2 font-sans  pt-2 ${props.type === "houses" ? "grid-cols-tableHousesHead" : "grid-cols-tableGridHead"}`}>

          {props.tableHeadings.map((item: string, index: number) => (
            <span key={index} className="text-[15px] font-bold">{item}</span>
          ))}

        </div>
        {/* Table Body */}
        <DndProvider backend={HTML5Backend}>
          {classesData.map((item: Class, index: number) => (
            <ClassRow
              key={index}
              index={index}
              moveCard={moveCard}
              item={item}
              type={props.type}
            />
          ))}
        </DndProvider>
      </div>
    </div>
  )
}


const DragAndDropTableMemo = memo(DragAndDropTable, areEqual)
export { DragAndDropTableMemo as DragAndDropTable }