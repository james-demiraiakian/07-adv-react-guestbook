import React from 'react';
import { useUser } from '../../context/UserContext';
import useDarkMode from 'use-dark-mode';
import './Header.css';

export default function Header() {
  const darkMode = useDarkMode(false);

  const handleDark = () => {
    darkMode.toggle();
  };

  const { user } = useUser();
  return (
    <div className='header'>
      <div>{user ? <div>Welcome to the guestbook, {user}!</div> : <div>Welcome Guest!</div>}</div>
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
