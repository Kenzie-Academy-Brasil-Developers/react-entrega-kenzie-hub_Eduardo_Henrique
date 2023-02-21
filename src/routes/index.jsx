import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";

export function RoutePages() {
  return (
    <Routes>
      <Route path="/home" element={<ProtectedRoutes />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
