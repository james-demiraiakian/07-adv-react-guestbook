import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return (
    <div>{user ? <div>Welcome to the guestbook, {user}!</div> : <div>Welcome Guest!</div>}</div>
  );
}
