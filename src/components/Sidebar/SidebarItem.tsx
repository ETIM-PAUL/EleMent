import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
import { areEqual } from '../../utils/equalChecks';


interface Props {
  title: string;
  icon: string;
  path: string;
  key: number;
}
const SidebarItem = ({ title, icon, path, key }) => {
  return (
    <div className='flex'>
      <NavLink to={path} aria-current="page"
        title={title} key={key}>
        <span className="">{icon}</span>
        <span className="">{title}</span>
      </NavLink>
    </div>
  )
}

const SidebarItemMemo = memo(SidebarItem, areEqual);

export { SidebarItemMemo as SidebarItem };