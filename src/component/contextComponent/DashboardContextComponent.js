import React from 'react';
export const DashboardContext = React.createContext();

const DashboardContextComponent = ({ children }) => {
  let data = {
    earningsMonthly: "40,000",
    earningsYearly: "215,000",
    task: "50",
    pendingRequest: "18"
  }
  return <DashboardContext.Provider value={data}>
    {children}
  </DashboardContext.Provider>
}

export default DashboardContextComponent
