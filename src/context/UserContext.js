import { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "../services/firebase";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const login = () => {
    auth.signInWithPopup(googleProvider);
  };
  const logout = () => {
    auth.signOut();
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
