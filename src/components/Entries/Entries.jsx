import React from 'react';
import { useEntries } from '../../context/EntryContext';

export default function Entries() {
  const { entries } = useEntries();

  return (
    <div>
      {entries.map((e, i) => (
        <div key={i}>
          <h3>{e.message}</h3>
          <p>~{e.username}</p>
        </div>
      ))}
    </div>
  );
}
