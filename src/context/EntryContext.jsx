import { createContext, useContext, useState } from 'react';

export const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return <EntryContext.Provider value={{ entries, setEntries }}>{children}</EntryContext.Provider>;
};

const useEntries = () => {
  const context = useContext(EntryContext);
  if (context === undefined) {
    throw new Error(
      'useEntries function must be rendered inside a EntryProvider element. Please check the location of this function in relation to the EntryProvider element'
    );
  }

  return context;
};

export { EntryProvider, useEntries };
