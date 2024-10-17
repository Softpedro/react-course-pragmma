import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Invitado" });

  const updateUser = (name) => {
    setUser({ name });
  };

  UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
