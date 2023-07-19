import React from 'react'
import DonationFormContext from './DonationFormContext/DonationFormContext'
import DonationRegistration from './DonationRegistration'

const DonationMainForm = () => {
  return (
    <div>
      <DonationFormContext>
        <DonationRegistration/>
      </DonationFormContext>
    </div>
  )
}

export default DonationMainForm
