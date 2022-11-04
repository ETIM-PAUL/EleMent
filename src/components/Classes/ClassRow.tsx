import React, { memo, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { areEqual } from "../../utils/equalChecks";
import { TfiArrowCircleDown } from "react-icons/tfi"
import { ProfileIcon } from "../../assets/profile";

type Props = {
  index: number,
  moveCard: any,
  item: Class,
}
interface Class {
  title: string,
  noOfPupils: number,
  boarders: number,
  day: number,
  dataCompletion: number,
  classTeacher: string,
  teacherInitials: string,
}

const ClassRow = ({ index, moveCard, item }: Props) => {
  const key = index;
  const ref = useRef(null);
  const [{ isOver }, drop] = useDrop({
    accept: "class",
    drop(item: any, monitor: any) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex !== hoverIndex) {
        moveCard(dragIndex, hoverIndex);
      }
    },
    collect: (monitor: any) => ({
      isOver: monitor.isOver(),
    }),
  });
  const [, drag] = useDrag({
    type: "class",
    item: { type: "class", index, key },
  });
  drag(drop(ref));
  return (
    <>
      <div
        className={isOver ? "border-[#DBFD51] border" : "border-[transparent] "}
      />
      <div
        className="grid grid-cols-tableGridBody items-center bg-white text-main-col uppercase text-sm font-sans rounded-[5px] my-4 hover:cursor-move py-3 px-3"
        key={index}
        ref={ref}
      >

        <div className="text-[#D61C4E]">
          <span>{item.title}</span>
        </div>

        <span className=" text-main-col normal-case font-sans">
          {item.noOfPupils}
        </span>
        <span className=" text-main-col normal-case font-sans">
          {item.boarders}
        </span>
        <span className=" text-main-col normal-case font-sans">
          {item.day}
        </span>
        <span className=" text-main-col normal-case font-sans">
          {item.dataCompletion}
        </span>

        <div className="flex  items-center gap-2">
          <ProfileIcon width="30" height="30" />
          <div className="grid text-xs">
            <span>{item.classTeacher}</span>
            <span>{item.teacherInitials}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:pr-0 hover:cursor-pointer">
          <TfiArrowCircleDown className="text-xl text-[#C8C8C8]" />
        </div>
      </div>
    </>
  );
};

const ClassRowMemo = memo(ClassRow, areEqual)
export { ClassRowMemo as ClassRow };