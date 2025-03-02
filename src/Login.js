import React, { useState } from "react";  
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(`${isSignUp ? "Signed up" : "Signed in"} successfully!`);
  };

  return (
    <StyledWrapper>
      <div className="container">
        <form className="form">
          {/* Moved the heading inside the form */}
          <div className="heading">Login</div>
          <input required className="input" type="text" name="Username" placeholder="Username" />
          <input required className="input" type="password" name="password" placeholder="Password" />
          
          <div className="btn">
            <button className="button1" onClick={() => navigate("/dashboard")}>Login</button>
            <button className="button2" onClick={() => navigate("/signup")}>Sign Up</button>
          </div>
          
          <button className="button3" onClick={() => navigate("/forgetpassword")}>Forgot Password</button>
        </form>        
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 3em;
    background-color: #171717;
    border-radius: 25px;
    transition: 0.4s ease-in-out;
    width: 350px; 
    min-height: 350px;
  }

  .form:hover {
    transform: scale(1.05);
    border: 1px solid black;
  }

  .heading {
    text-align: center;
    font-weight: 900;
    font-size: 40px;
    color: white;
    margin-bottom: 15px; /* Added spacing */
  }

  .btn {
    display: flex;
    justify-content: center;
    gap: 0.5em;
    margin-top: 1.5em;
  }

  .button1, .button2, .button3 {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-color: #252525;
    color: white;
    cursor: pointer;
  }

  .button1:hover, .button2:hover {
    background-color: black;
  }

  .button3 {
    margin-top: 1em;
    width: 90%;
    background-color: red;
  }

  .button3:hover {
    background-color: darkred;
  }
`;

export default Login;
