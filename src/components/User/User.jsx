import React, { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function User() {
  const [username, setUsername] = useState('');
  const [userEntry, setUserEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  return (
    <div>
      <div className="username-box">
        <label htmlFor="username">User Name: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="entry-box">
        <label htmlFor="user-entry">Entry</label>
        <input
          type="text"
          id="user-entry"
          value={userEntry}
          onChange={(e) => setUserEntry(e.target.value)}
        />
      </div>
    </div>
  );
}
