import { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const  [Autho, setIsAuth]  = useState(false);
  function Authotoggle() {
      if (Autho==false) {
        axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then(function (response) {
          console.log(response.data.token);
          setIsAuth(response.data.token)
      })
      .catch(function (error) {
        console.log(error);
      });
      } else {
        setIsAuth(() => {
            return false
        })
    }
  }
  return <AuthContext.Provider value={{Autho,Authotoggle}}>{children}</AuthContext.Provider>;
};
