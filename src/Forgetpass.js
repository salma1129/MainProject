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
  background-color: rgb(124, 125, 128);
   .form-container {
    position: center;
    width: 450px;
    background-color: #fff;
    padding: 40px 40px;
    font-size: 20px;
    font-family: inherit;
    color: rgb(46, 74, 121);
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
    border-color: rgb(46, 74, 121);
  }

  .form-container .form-submit-btn {
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(45deg, rgb(46, 74, 121) 0%, rgb(46, 74, 121) 100%);
    color: white;
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;
  }

  .form-container .form-submit-btn:hover {
    transform: scale(1.03);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
  }

  .form-container .link {
    color: rgba(236, 44, 44, 0.78);
    text-decoration: none;
  }

  .form-container .signup-link {
    align-self: center;
    font-weight: 500;
  }

  .form-container .signup-link .link {
    font-weight: 300;
  }

  .form-container .link:hover {
    text-decoration: underline;
  }`;

export default Forgetpass;