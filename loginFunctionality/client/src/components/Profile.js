import React from 'react';
import TopNavigation from './TopNavigation';
import { useSelector } from 'react-redux';

 function Profile() {

  let storeObj = useSelector((store)=>{
return store;
  });

  return (
    <div>
      <TopNavigation />
 <div className='profielDiv'>
      <h2>
        Hello {storeObj.userData.firstName} {storeObj.userData.lastName} Welcome to profile page
      </h2>
      <img className='image' src={`http://localhost:1947/${storeObj.userData.profilePic}`}></img>
      <h2>NAME:{storeObj.userData.firstName} {storeObj.userData.lastName}</h2>
      <h2>PH.No:{storeObj.userData.mobile}</h2>
      <h2>Gender:{storeObj.userData.gender}</h2>
      </div>
    </div>
  );
}

export default Profile;
