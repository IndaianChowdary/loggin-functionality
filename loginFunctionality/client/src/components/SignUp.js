import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let mobileInputRef = useRef();
  let genderInputRef = useRef();
  let profielPicInputRef = useRef();

  let [profile, setProfile] = useState("./images/noImage.png");


  let SignUpUsingFormData = async () => {
    let dataToSend = new FormData();
    dataToSend.append("firstName", firstNameInputRef.current.value);
    dataToSend.append("lastName", lastNameInputRef.current.value);
    dataToSend.append("email", emailInputRef.current.value);
    dataToSend.append("password", passwordInputRef.current.value);
    dataToSend.append("mobile", mobileInputRef.current.value);
    dataToSend.append("gender", genderInputRef.current.value);

    for (let i = 0; i < profielPicInputRef.current.files.length; i++) {
      dataToSend.append("profilePic", profielPicInputRef.current.files[i]);
    }

    let reqMethod = {
      method: "POST",
      body: dataToSend,
    };

    let JSONData = await fetch("http://localhost:1947/register", reqMethod);
    let JSOData = await JSONData.json();
    console.log(JSOData);
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input  type="text" ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>Email</label>
          <input type="email" ref={emailInputRef}></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" ref={passwordInputRef}></input>
        </div>
        <div>
          <label>Mobile no.</label>
          <input  type="number" ref={mobileInputRef}></input>
        </div>
        <div>
          <label>Gender</label>
          <input  type="text" ref={genderInputRef}></input>
        </div>
        <div>
          <label>profiel Pic</label>
          <input
            type="file"
            accept="image/*"
            onChange={(eo) => {
              let selectedPicPath = URL.createObjectURL(eo.target.files[0]);
              setProfile(selectedPicPath);
            }}
            ref={profielPicInputRef}
          ></input>
          <br></br>
          <br></br>
          <br></br>
          <img src={profile}alt="" className="pic"></img>
        </div>

        

    
        
      

        <button
          type="submit"
          onClick={() => {
            SignUpUsingFormData();
          }}
        >
      SignUp
        </button>
        <button><Link to="/">Login</Link> </button>
      </form>
               

    </div>
  );
}

export default SignUp;
