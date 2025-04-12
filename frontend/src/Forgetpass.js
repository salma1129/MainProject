import React from 'react';
import styled from 'styled-components';
import './Forgetpass.css';

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

// ✅ Define StyledWrapper correctly
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(124, 125, 128);
`;

export default Forgetpass;
