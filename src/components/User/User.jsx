import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function User() {
  const [username, setUsername] = useState('');
  const [userEntry, setUserEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  function updateUser() {
    if (!userEntry) return;
    setUser(username);
    setEntries([...entries, { username, message: userEntry, id: uuid() }]);
    setUserEntry('');
  }

  const submit = (e) => {
    e.preventDefault();
    updateUser();
  };

  return (
    <div>
      <form onSubmit={submit}>
        {!user && (
          <div className="username-box">
            <label htmlFor="username">User Name: </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div className="entry-box">
          <label htmlFor="user-entry">Entry: </label>
          <input
            type="text"
            id="user-entry"
            value={userEntry}
            onChange={(e) => setUserEntry(e.target.value)}
          />
        </div>
        <button className="button-color" type="submit">
          Sign
        </button>
        {user && (
          <button
            className="button-color"
            type="button"
            onClick={() => {
              setUser('');
              setUsername('');
            }}
          >
            Not you?
          </button>
        )}
      </form>
    </div>
  );
}
