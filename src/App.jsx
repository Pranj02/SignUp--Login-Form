import React, { useState } from "react";
import "./App.css";

import user_icon from "./assets/user.png";
import email_icon from "./assets/email.png";
import password_icon from "./assets/password.png";



const App = () => {
  const [action,setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

        {/*Inputs*/}
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <img src={user_icon} alt="user" />
          <input type="text" placeholder="Name" />
        </div>}
        
        {/*Email-For all*/}
        <div className="input">
          <img src={email_icon} alt="email" />
          <input type="email" placeholder="Email-Id" />
        </div>

        {/* Password – Only for Sign Up & Login */}
        <div className="input">
          <img src={password_icon} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      
      {action === "Sign Up" ? <div></div> : <div className="forgot-password">forgot Password?{" "} <span onClick={() => setAction("Forgot Password")}>Click Here!</span></div>}
    
     

       {/* Buttons */}
      <div className="button">
       
      {/* Forgot Password Button */}
      



        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() =>{setAction("Sign Up")} }>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
     
      </div>
    </div>
  );
};



export default App;
