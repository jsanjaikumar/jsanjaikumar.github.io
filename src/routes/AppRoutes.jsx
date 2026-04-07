import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import CaseStudyPage from "../components/pages/CaseStudyPage";
import { navRoutes } from "./routeConfig";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<CaseStudyPage />} path="/case-study" />
      {navRoutes.map((route) => (
        <Route
          element={<App targetSectionId={route.sectionId} />}
          key={route.path}
          path={route.path}
        />
      ))}
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  );
}
