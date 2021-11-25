import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const HOME_PAGE = "/home";

  const login = () => {
    fetch("http://localhost:3000/login", { method: "POST" }).then(() =>
      navigate(HOME_PAGE)
    );
  };

  return <button onClick={login}>login</button>;
};

export default LoginPage;
