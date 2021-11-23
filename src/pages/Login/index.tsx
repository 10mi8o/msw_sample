import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const HOME_PAGE = "/HOME";

  const login = () => {
    fetch("http://localhost:3000/login", { method: "POST" }).then(() =>
      navigate(HOME_PAGE)
    );
  };

  return <button onClick={login}>login</button>;
};

export default Login;
