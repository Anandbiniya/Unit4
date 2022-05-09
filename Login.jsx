import React from "react";

import { useNavigate, Outlet } from "react-router-dom";
function Login() {
  const navgate = useNavigate();
  return (
    <h1 className="Actions">
      <button onClick={() => navgate("sign-in")}>Sign-in</button>
      <button onClick={() => navgate("sign-up")}>Sign-up</button>
      <button onClick={() => navgate("Product")}>Sign-in by Gmail</button>

      <Outlet />
    </h1>
  );
}

export default Login;
