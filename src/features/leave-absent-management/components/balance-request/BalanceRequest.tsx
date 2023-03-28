import React from 'react'
import LeaveRequestList from './leave-request/LeaveRequestList'
import LeaveEntitlementCounters from './LeaveEntitlementCounters'
import StatusLeaveEntitlements from './StatusLeaveEntitlements'

export default function BalanceRequest() {
  return (
    <div>
      <LeaveEntitlementCounters />
      <StatusLeaveEntitlements />
      <LeaveRequestList />
    </div>
  )
}
