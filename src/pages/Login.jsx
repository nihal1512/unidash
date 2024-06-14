import React, {useState} from 'react';
import '../App.css'
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {

const [isSignInForm, setSignInForm] = useState(true);
const [errorMessage, setErrorMessage] = useState(" ");

  const navigate = useNavigate();

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
      }

  return (
    <div className="login-page">
      
      <div className='login'>
      <form 
        onSubmit={(e) => { e.preventDefault(); handleButtonClick(); }}
        className='login-form'
      >
        <h1 className='login-heading'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <p>Enter your credentials below</p>
        {
          !isSignInForm && 
          (
            <input 
              type="text" 
              placeholder='Full Name' 
              className='login-input'
            />
          )
        }
        <input 
          type="text" 
          placeholder='Email Address' 
          className='login-input'
        />
        <input 
          type="password" 
          placeholder='Password' 
          className='login-input'
        />
        <p>{errorMessage}</p>
        <Link to="/dashboard">
        <button 
          className='login-button'
          type="submit"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        </Link>
        <p 
          className='toggle-message' 
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "New to unisat, Sign up now" : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
    </div>
  );
}

export default LoginPage;