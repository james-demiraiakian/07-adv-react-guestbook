import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const userValue = { user, setUser };

  return <UserContext.Provider value={userValue}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      'useUser function must be rendered inside a UserProvider element. Please check the location of this function in relation to the UserProvider element'
    );
  }
  return context;
};

export { UserProvider, useUser };
