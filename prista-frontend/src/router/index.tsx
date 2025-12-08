import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/auth-layout";
import LoginPage from "../pages/login-page";
import MainLayout from "../layouts/main-layout";
import HomePage from "../pages/home-page";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
    ],
  }
]);
