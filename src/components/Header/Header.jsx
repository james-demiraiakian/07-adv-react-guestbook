import React from 'react';
import useDarkMode from 'use-dark-mode';
import './Header.css';
import { useAuth } from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const darkMode = useDarkMode(false);
  const { user, logout } = useAuth();
  const email = user.email;
  const history = useHistory();

  const handleDark = () => {
    darkMode.toggle();
  };

  const handleSignout = () => {
    logout(() => history.push('/'));
  };

  return (
    <div className="header">
      <div>{email ? <div>Welcome to the guestbook, {email}!</div> : <div>Welcome Guest!</div>}</div>
      <button
        className={darkMode.value ? 'style-button-dark-mode2' : 'style-button-light-mode2'}
        type="button"
        onClick={handleSignout}
      >
        Sign Out
      </button>
      <button
        className={darkMode.value ? 'style-button-dark-mode' : 'style-button-light-mode'}
        type="button"
        onClick={handleDark}
      >
        {!darkMode.value ? <>Dark</> : <>Light</>}
      </button>
    </div>
  );
}
