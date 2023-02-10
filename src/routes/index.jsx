import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { useEffect, useState } from "react";

export function RoutePages() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = window.localStorage.getItem("@KenzieHub:Token");
    if (!token) {
      setAuthenticated(false);
    }
  }, []);
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route
        path="/"
        element={<LoginPage setAuthenticated={setAuthenticated} />}
      />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
