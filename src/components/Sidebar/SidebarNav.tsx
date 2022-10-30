import React, { memo } from 'react'
import { sidebarItems } from '../../utils/data'
import { areEqual } from '../../utils/equalChecks';
// import { areEqual } from '../../utils/equalChecks'
import { SidebarItem } from './SidebarItem'

type SidebarItems = {
  title: string;
  path: string;
  tier: string;
  icon: string;
  index: number;
}

const SidebarNav = () => {
  return (
    <div>
      {sidebarItems.map((item: SidebarItems,) => (
        <SidebarItem title={item.title} icon={item.icon} path={item.path} key={item.index} />
      ))}
    </div>
  )
}

const SidebarNavMemo = memo(SidebarNav, areEqual);

export { SidebarNavMemo as SidebarNav }