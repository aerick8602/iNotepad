import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Signup.css';
import { BASE_URL } from '../render';


const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });
  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.cpassword) {
      setErrorMessages({ cpassword: 'Passwords do not match' });
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/auth/SignUp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem('token', json.authtoken);
        navigate('/');
      } else {
        if (json.error === 'User already exists') {
          setErrorMessages({ email: 'User already exists. Please use a different email.' });
        } else {
          setErrorMessages({ general: json.error || 'Signup failed' });
        }
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setErrorMessages({ general: 'Signup failed. Please try again later.' });
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setErrorMessages({ ...errorMessages, [e.target.name]: '' });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="heading">Sign Up</h2>
          <div className="form_input">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              className="Sinput"
              id="name"
              name="name"
              value={credentials.name}
              onChange={onChange}
              placeholder="Enter name"
            />
          </div>
          <div className="form_input">
            <label htmlFor="email">Email address</label>

            <input
              type="email"
              className="Sinput"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="Enter email"
            />
            {errorMessages.email && (
              <small className="text-danger">{errorMessages.email}</small>
            )}

            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form_input">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              className="Sinput"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Password"
              minLength={5}
              required
            />

            <small id="passwordHelp" className="form-text text-muted">
              Password must be at least 5 characters long.
            </small>
          </div>
          <div className="form_input">
            <label htmlFor="cpassword">Confirm Password</label>

            <input
              type="password"
              className="Sinput"
              id="cpassword"
              name="cpassword"
              value={credentials.cpassword}
              onChange={onChange}
              placeholder="Confirm Password"
              minLength={5}
              required
            />
            {errorMessages.cpassword && (
              <small className="text-danger">{errorMessages.cpassword}</small>
            )}
          </div>
          {errorMessages.general && (
            <div className="alert alert-danger" role="alert">
              {errorMessages.general}
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
