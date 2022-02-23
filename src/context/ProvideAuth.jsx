import { createContext, useState } from 'react';

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const loginSuccess =
      email === process.env.REACT_APP_AUTH_EMAIL &&
      password === process.env.REACT_APP_AUTH_PASSWORD;
    if (loginSuccess) {
      setUser({ email });
    }
    return loginSuccess;
  };

  const logout = (callback) => {
    setUser(null);
    callback();
  };

  return <authContext.Provider value={{ user, login, logout }}>{children}</authContext.Provider>;
}
