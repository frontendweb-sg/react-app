import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import NotFoundPage from "@/pages/NotFound";
import Layout from "@/components/layout";
import Auth from "@/pages/auth";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Admin from "@/pages/admin";
import Dashboard from "@/pages/admin/dashboard";
import CommingSoonPage from "@/pages/CommingSoon";
import AdminCategory from "@/pages/admin/category";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "about",
        element: <AboutPage />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "category", element: <AdminCategory /> },
    ],
  },
  {
    path: "/comming-soon",
    element: <CommingSoonPage />,
  },
]);

/**
 * App routes component
 * @returns
 */
const AppRoutes = () => {
  return <RouterProvider router={routes} />;
};

export default AppRoutes;
