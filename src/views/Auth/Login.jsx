import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

export default function Login() {
  const { formState, handleChange } = useForm({ email: '', password: '' });
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [error, setError] = useState(null);
  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginSuccess = auth.login(formState.email, formState.password);
    console.log(loginSuccess, formState);
    if (loginSuccess) {
      history.replace(from);
    } else {
      setError('Login details incorrect');
    }
  };
  return (
    <div>
      <h2>Please Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email: </label>
        <input onChange={(e) => handleChange(e)} name="email" type="email" id="email" />
        <label htmlFor="password">Password: </label>
        <input onChange={(e) => handleChange(e)} name="password" type="password" id="password" />
        <button type="submit">Sign In</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
