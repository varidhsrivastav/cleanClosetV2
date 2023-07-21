import React from 'react';
import "./UpdateAccount.css"

const UpdateAccount = () => {
  return (
    <div className='UpdateAccountMainContainer'>
      <div className="UpdateAccountContainer">
        <div className="UpdateAccountContainerProfile">
        <h2>Personal info</h2>
        <p>Update Your photo and personal details here</p>
        <div className="UpdateAccountContainerProfileBody">
        <div className="DBDFinputupdateFields">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Your Full Name" />
          </div>
        </div>
        </div>
        <div className="UpdateAccountContainerProfile">
        <h2>Your Address </h2>
        <p>Update Your Address details here</p>
        <div className="UpdateAccountContainerProfileBody">
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateAccount
