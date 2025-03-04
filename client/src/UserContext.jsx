import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  // console.log(user);
  useEffect(() => {
    const getProfile = async () => {
      try {
        if (!user) {
          const {data} = await axios.get("/profile");
          console.log(data);
          setUser(data.name);
        }
      } catch (error) {
        console.error("데이터 로딩 오류: ", error);
      }
    };
    getProfile();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
