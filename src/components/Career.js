import React, { useState } from 'react';
import styled from 'styled-components';

const SignInWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  min-width: 100vw;
  height: 80vh;
`;

const SignInTitle = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const SignInInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background-color: #4caf50;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SignInError = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 20px;
`;

const Career = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form values and sign in user
    // If sign in is successful, redirect to home page
    // If sign in fails, display error message
  };

  return (
    <SignInWrapper>
      <SignInTitle>Sign In</SignInTitle>
      <SignInForm onSubmit={handleSubmit}>
        <SignInInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <SignInInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <SignInButton type="submit">Sign In</SignInButton>
      </SignInForm>
      {error && <SignInError>{error}</SignInError>}
    </SignInWrapper>
  );
};

export default Career;
