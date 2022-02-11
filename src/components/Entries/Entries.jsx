import React from 'react';
import useDarkMode from 'use-dark-mode';
import { useEntries } from '../../context/EntryContext';
import './Entries.css';

export default function Entries() {
  const { entries } = useEntries();
  const darkMode = useDarkMode();

  return (
    <div className='entry-box'>
      {entries.map((e) => (
        <div key={e.id} className={darkMode.value ? 'entry-card-dark' : 'entry-card-light'}>
          <h3>{e.message}</h3>
          <p className='user-name'>~{e.username}</p>
        </div>
      ))}
    </div>
  );
}
