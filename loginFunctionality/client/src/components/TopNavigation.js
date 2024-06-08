import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function TopNavigation() {
  let navigate= useNavigate();
  let storeObj = useSelector((store) => {
    return store;
  });
  useEffect(() => {
    if (storeObj && storeObj.userData && storeObj.userData.email) {
    }else{
      navigate("/")
    }
  });
  return (
    <nav>
      <Link to="/profile">Profile</Link>
      <Link to="/editprofile">EditProfile</Link>
      <Link to="/">LogOut</Link>
    </nav>
  );
}

export default TopNavigation;
