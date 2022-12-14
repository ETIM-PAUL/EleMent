import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
import { areEqual } from '../../utils/equalChecks';


interface Props {
  title: string;
  icon: string;
  path: string;
}
const SidebarItem = ({ title, icon, path }: Props) => {
  return (
    <div className="sidebar-nav relative">
      <NavLink to={path}
        aria-current="page"
        className={({ isActive }) => isActive ? "bg-container-bg flex py-[9px] ml-6 px-2 my-4 rounded-tl-xl rounded-bl-xl active text-main-col" : "flex py-[9px] ml-6 px-2 my-4 rounded-none text-white"}>
        <b></b>
        <b></b>
        <span className="">{icon}</span>
        <span className="text-red">{title}</span>
      </NavLink>
    </div>
  )
}

const SidebarItemMemo = memo(SidebarItem, areEqual);

export { SidebarItemMemo as SidebarItem };