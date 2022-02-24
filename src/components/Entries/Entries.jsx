import React from 'react';
import useDarkMode from 'use-dark-mode';
import { useEntries } from '../../context/EntryContext';
import { useAuth } from '../../hooks/useAuth';
import './Entries.css';

export default function Entries() {
  let { entries } = useEntries();
  const darkMode = useDarkMode();
  const auth = useAuth();
  const email = auth.user.email;

  return (
    <div className="entry-box">
      {entries.map((e) => (
        <div key={e.id} className={darkMode.value ? 'entry-card-dark' : 'entry-card-light'}>
          <h3>{e.message}</h3>
          <p className="user-name">~{email}</p>
        </div>
      ))}
    </div>
  );
}
