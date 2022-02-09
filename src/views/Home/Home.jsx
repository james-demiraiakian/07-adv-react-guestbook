import React from 'react';
import Entries from '../../components/Entries/Entries';
import Header from '../../components/Header/Header';
import User from '../../components/User/User';

export default function Home() {
  return (
    <div>
      <Header />
      <User />
      <Entries />
    </div>
  );
}
