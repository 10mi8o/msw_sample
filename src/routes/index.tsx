import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const MswRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
