import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const {
    user: { name },
  } = useUser();
  return (
    <div>{name ? <div>Welcome to the guestbook, {name}!</div> : <div>Welcome Guest!</div>}</div>
  );
}
