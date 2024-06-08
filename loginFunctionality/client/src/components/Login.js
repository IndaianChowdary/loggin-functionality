import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

function Login() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  let dispatch = useDispatch();

  let navigate = useNavigate();

  let loginValidation = async () => {
    const sendingData = new FormData();
    sendingData.append("email", emailInputRef.current.value);
    sendingData.append("password", passwordInputRef.current.value);

    let reqMethod = {
      method: "POST",
      body: sendingData,
    };

    let JSONData = await fetch("http://localhost:1947/login", reqMethod);
    let JSOData = await JSONData.json();

    if (JSOData.status === "success") {

      dispatch({type:"login",data:JSOData.data});
      navigate("/profile");

    } else {
      alert(JSOData.msg);
    };
    
  };

  return (
    <div>
      <form>
        <div>
          <label>Email</label>
          <input type="email" ref={emailInputRef} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" ref={passwordInputRef} />
        </div>
        <button
          type="button"
          onClick={() => {
            loginValidation();
          }}
        >
          LOGIN
        </button>
        <button><Link to="/signup">SignUp</Link></button>
      </form>
      <br />
      <br />
      
    </div>
  );
}

export default Login;
