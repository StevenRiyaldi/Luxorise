import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProfileContext = createContext({
  userProfile: {},
  setUserProfile: () => null,
});

export const ProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({});
  const value = { userProfile, setUserProfile };

  useEffect(() => {
    const getProfile = async () => {
      const userId = localStorage.getItem("userId");

      console.log(userId);

      const respond = await axios.get(
        `http://localhost/luxorise/server/client/profile.php/${userId}`
      );

      setUserProfile(respond.data);
    };

    getProfile();
  }, []);

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileContext;
