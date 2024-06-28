import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
import { BASE_URL } from '../render';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/auth/SignIn`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      });
      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem('token', json.authtoken);
        navigate('/');
      } else {
        throw new Error(json.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      const errorMsg = error.response && error.response.data && error.response.data.msg
        ? error.response.data.msg
        : error.message;
      alert(`Sign In Failed: ${errorMsg}`);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="loginContainer">
        <form onSubmit={handleSubmit}>
          <div className="headlogin">
            <h2>Login</h2>
          </div>
          <div className="loginform">
            <label htmlFor="email">Email address</label>

            <input
              type="email"
              className="logininput"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="Enter email"
            />
          </div>
          <div className="loginform">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              className="logininput"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Password"
            />
          </div>
          <div className="LSubmit">
            <button type="submit" className="loginSubmit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
