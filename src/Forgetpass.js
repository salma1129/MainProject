import React from 'react';
import styled from 'styled-components';

const Forgetpass = () => {
  return (
    <StyledWrapper>
      <div className="form-container">
        <div className="logo-container">
          Forgot Password
        </div>
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <button className="form-submit-btn" type="submit">Send Email</button>
        </form>
        <p className="signup-link">
          Don't have an account?
          <a href="#" className="signup-link link"> Sign up now</a>
        </p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
   .form-container {
    position: center;
    max-width: 400px;
    background-color: #fff;
    padding: 40px 40px;
    font-size: 20px;
    font-family: inherit;
    color: rgb(16, 137, 211);
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: rgba(133, 189, 215, 0.87) 0px 30px 30px -20px;
     }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .logo-container {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
  }

  .form-container .form-group input {
    width: 90%;
    padding: 12px 16px;
    border-radius: 6px;
    font-family: inherit;
    border: 1px solid #ccc;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #1778f2;
  }

  .form-container .form-submit-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    color: #fff;
    background-color:rgb(23, 131, 198);
    border: none;
    width: 100%;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin: 12px 0;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
  }

  .form-container .form-submit-btn:hover {
    background-color: #313131;
  }

  .form-container .link {
    color: rgba(148, 39, 39, 0.78);
    text-decoration: none;
  }

  .form-container .signup-link {
    align-self: center;
    font-weight: 500;
  }

  .form-container .signup-link .link {
    font-weight: 400;
  }

  .form-container .link:hover {
    text-decoration: underline;
  }`;

export default Forgetpass;
