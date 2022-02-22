import React from 'react';

export default function Login() {
  const handleLoging = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Must login to visit (INSERT PAGE VARIABLE FROM HISTORY HERE)</h2>
      <form>
        <label htmlFor="email">Email: </label>
        <input onChange={(e) => handleChange(e)} name="email" type="email" id="email" />
        <label htmlFor="password">Password: </label>
        <input name="password" type="password" id="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
