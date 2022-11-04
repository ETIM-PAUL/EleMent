import React, { memo } from 'react'
import { Dashboard } from '../../components/Dashboard'
import { areEqual } from '../../utils/equalChecks'

const DashboardView = () => {
  return (
    <div><Dashboard /></div>
  )
}

const DashboardViewMemo = memo(DashboardView, areEqual)
export { DashboardViewMemo as DashboardView }