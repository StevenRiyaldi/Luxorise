import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext({
  currentUser: {},
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const getUser = async () => {
      const userId = localStorage.getItem("userId");

      const respond = await axios.get(
        `http://localhost/luxorise/server/client/login.php/${userId}`
      );

      setCurrentUser(respond.data);
    };

    getUser();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
