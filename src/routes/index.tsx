import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/Home/Page";
import LoginPage from "../pages/Login/Page";
import { SandBox } from "../pages/Sandbox/Page";
import TestSamplePage from "../pages/TestSample/Page";

export const MswRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/test_sample" element={<TestSamplePage />} />
      <Route path="/sandbox" element={<SandBox />} />
    </Routes>
  );
};
