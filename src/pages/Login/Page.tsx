import React from "react";
import { useNavigate } from "react-router-dom";
import { loginPage } from "../../api/login";

const LoginPage = () => {
  const navigate = useNavigate();
  const HOME_PAGE = "/home";

  const login = () => {
    loginPage();
    navigate(HOME_PAGE);
  };

  return <button onClick={login}>login</button>;
};

export default LoginPage;
