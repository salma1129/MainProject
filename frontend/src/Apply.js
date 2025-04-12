import React from "react";
import styled from "styled-components";
import './Apply.css';
const Apply = () => {
  return (
      <form className="form">
        <p className="title">Apply</p>
        <p className="message">Apply now for a job.</p>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Firstname</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input required placeholder="" type="email" className="input" />
          <span>Email</span>
        </label>
        <label>
          <input required placeholder="" type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input required placeholder="" type="password" className="input" />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
        </p>
      </form>
  );
};

/*const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width:500px;
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
  }

  // .title::before,
  // .title::after {
  //   position: absolute;
  //   content: "";
  //   height: 16px;
  //   width: 16px;
  //   border-radius: 50%;
  //   left: -25px;
  //   background-color: royalblue;
  // }

  .title::before {
    width: 18px;
    height: 18px;
  }

  

  .message {
    color: green;
    font-size: 14px;
  }

  .form label {
    position: relative;
    display: block;
    width: 100%;
  }

  .input {
    width: 90%;
    padding: 10px;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
    outline: none;
  }

  .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    transition: 0.3s ease;
  }

  .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .input:focus + span,
  .input:valid + span {
    top: 5px;
    font-size: 0.8em;
    font-weight: 600;
  }

  .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;*/

export default Apply;
