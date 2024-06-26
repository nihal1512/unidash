import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const LoginPage = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    setErrorMessage('');
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      if (isSignInForm) {
        // Sign In
        const response = await axios.post('http://localhost:5000/api/v1/auth/signin', {
          email: formData.email,
          password: formData.password,
        });
        // Store token or handle successful login here
        console.log(response.data);
        navigate('/dashboard');
      } else {
        // Sign Up
        const response = await axios.post('http://localhost:5000/api/v1/auth/signup', {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        // Handle successful registration here
        console.log(response.data);
        setSignInForm(true);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="login-page">
      <div className='login'>
        <form onSubmit={handleSubmit} className='login-form'>
          <h1 className='login-heading'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          <p>Enter your credentials below</p>
          {!isSignInForm && (
            <input
              type="text"
              name="username"
              placeholder='Full Name'
              className='login-input'
              value={formData.username}
              onChange={handleChange}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder='Email Address'
            className='login-input'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder='Password'
            className='login-input'
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          <button className='login-button' type="submit">
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p className='toggle-message' onClick={toggleSignInForm}>
            {isSignInForm ? 'New to unisat, Sign up now' : 'Already have an account? Sign In'}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
