import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Fake login system (Day 4 challenge): we only store a username.
// There is no real security here. It just simulates how auth works.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('communityhub-user', null);

  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Small helper so components can write: const { user } = useAuth();
export function useAuth() {
  return useContext(AuthContext);
}
