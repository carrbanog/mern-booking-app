import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  // console.log(user);
  useEffect(() => {
    const getProfile = async () => {
      try {
        if (!user) {
          const {data} = await axios.get("/profile");
          console.log(data);
          setReady(true);
          setUser({ name: data.name, email: data.email });
        }
      } catch (error) {
        console.error("데이터 로딩 오류: ", error);
      }
    };
    getProfile();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
