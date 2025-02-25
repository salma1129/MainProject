import React , {useState} from "react";  
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function Login({ onLogin }){  
  const navigate = useNavigate();


    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    const handleSubmit = () => {
        alert(`${isSignUp ? "Signed up" : "Signed in"} successfully!`);
      }      
    return (
        <StyledWrapper>
      <form className="form">
        <p id="heading" onClick={onLogin}>Login</p>
        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
          </svg>
          <input autoComplete="off" placeholder="Username" className="input-field" type="text" />
        </div>
        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          </svg>
          <input placeholder="Password" className="input-field" type="password" />
        </div>
        <div className="btn">
          
          <button className="button1" onClick={() => navigate("/dashboard")}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          
          
          <button className="button2" onClick={() =>navigate("/signup")}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Up&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          
        </div>
        <button className="button3" onClick={() =>navigate("/forgetpassword")}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgot Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full height for vertical centering */
      color: rgb(16,137,211);
 /* Optional: Dark background */

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px; /* Reduce form width */
    padding: 1.5em;
    background-color:white;
    border-radius: 15px;
    transition: .3s ease-in-out;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
  }

  .form:hover {
    transform: scale(1.02);
  }

  #heading {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: rgb(16, 137, 211);
  }

  .field {
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.6em;
    border-radius: 10px;
    background-color: rgb(16,137,211);
  }

  .input-field {
    width: 90%;
    background: white;
    border: none;
    padding: 15px 20px;
    border-radius: 20px;
    margin-top: 15px;
    box-shadow: #cff0ff 0px 10px 10px -5px;
    border-inline: 2px solid transparent;
  }

  .form .btn {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5em;
  }

  .button1, .button2, .button3 {
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    background-color: rgb(16,137,211);
    color: white;
    transition: .3s ease-in-out;
  }

  .button1:hover, .button2:hover {
    background-color: black;
  }

  .button3 {
    margin-top: 1em;
    width: 100%;
    text-align: center;
  }

  .button3:hover {
    background-color: red;
  }
`;
export default Login;