import React, { memo } from 'react'
import { LiveClassIn } from '../../components/LiveClass'
import { areEqual } from '../../utils/equalChecks'

const LiveClass = () => {
  return (
    <div><LiveClassIn /></div>
  )
}
const LiveClassMemo = memo(LiveClass, areEqual)
export { LiveClassMemo as LiveClass }