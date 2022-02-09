import React from 'react';
import { useUser } from '../../context/UserContext';
import useDarkMode from 'use-dark-mode';

export default function Header() {
  const darkMode = useDarkMode(false);
  console.log(darkMode);

  const handleDark = () => {
    darkMode.toggle();
  };

  const { user } = useUser();
  return (
    <>
      <div>{user ? <div>Welcome to the guestbook, {user}!</div> : <div>Welcome Guest!</div>}</div>
      <button type="button" onClick={handleDark}>
        {!darkMode.value ? <>Dark</> : <>Light</>}
      </button>
    </>
  );
}
