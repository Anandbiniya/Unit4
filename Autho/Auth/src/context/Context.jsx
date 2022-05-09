import { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [Auth, SetAuth] = useState(false);
  function AthoFun() {
    if (Auth == true) {
      SetAuth(() => {
        return false;
      });
    }
    if (Auth == false) {
      axios
        .post("https://reqres.in/api/login", {
          email: "anandhhikkdakji@gmail.cpm",
          password: "huuhu",
        })
        .then(function (response) {
          console.log(response.data.token);
          SetAuth(response.data.token);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  return (
    <AuthContext.Provider value={{ Auth, AthoFun }}>
      {children}
    </AuthContext.Provider>
  );
};
