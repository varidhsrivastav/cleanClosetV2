import React, { useState } from 'react';
import DonationDashbaord from '../DonationDashbaord';

export const dashboardContext = React.createContext();
const DonationDashboardContext = () => {
    const [currentDashboard, setDashboard] = useState(1);

  return (
    <div>

    <dashboardContext.Provider
    value={{currentDashboard, setDashboard}}>
        <DonationDashbaord/>
    </dashboardContext.Provider>
    </div>
  )
}

export default DonationDashboardContext