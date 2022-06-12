import React, { useState } from "react";
import "../App.css";
import Navbar from "./Navbar";

function SignUp() {
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [Education, setEdu] = useState("");
  const [Institute, setInst] = useState("");
  const [img, setImg] = useState("");
  const [Exp, setExp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleFnameChange = (e) => {
    setFName(e.target.value);
  };

  const handleLnameChange = (e) => {
    setLName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEducation = (e) => {
    setEdu(e.target.value);
  };
  const handleInst = (e) => {
    setInst(e.target.value);
  };
  const handleSubmit = (e) => {
  
      console.log("A form was submitted ");
   
    e.preventDefault();
  };

  return (
    <div className="AllSign">
      <Navbar />
      <div className="Sign">
        <header className="Sign-header">
          <form className="form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="Name">
              <input
                placeholder="First Name..."
                type="text"
                value={Fname}
                required
                onChange={(e) => {
                  handleFnameChange(e);
                }}
              />

              <input
                placeholder="Last Name..."
                type="text"
                value={Lname}
                required
                onChange={(e) => {
                  handleLnameChange(e);
                }}
              />
              <br />
            </div>
            <br />
            <div className="Cred">
              <input
                placeholder="Email..."
                type="email"
                value={email}
                required
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
             
              <br />

              <input
                placeholder="Password..."
                type="password"
                value={password}
                required
                onChange={(e) => {
                  handlePasswordChange(e);
                }}
              />
               </div>
              <br />
           
           
           
            <div className="Edu">
            <input
              placeholder="Field Of Study"
              type="text"
              value={Education}
              required
              onChange={(e) => {
                handleEducation(e);
              }}
            />
            <input
              placeholder="Educational Institute"
              type="text"
              value={Institute}
              required
              onChange={(e) => {
                handleInst(e);
              }}
            />
            </div>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
    </div>
  );
}

export default SignUp;
