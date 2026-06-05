import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
import AdminLayout from "../layouts/AdminLayout";
import HomePage from "../pages/public/HomePage";
import AboutPage from "../pages/public/AboutPage";
import ContactPage from "../pages/public/ContactPage";
import CalendarPage from "../pages/public/CalendarPage";
import ComicsPage from "../pages/public/ComicsPage";
import ComicDetailPage from "../pages/public/ComicDetailPage";
import BlogsPage from "../pages/public/BlogsPage";
import BlogDetailPage from "../pages/public/BlogDetailPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FavoritesPage from "../pages/user/FavoritesPage";
import MePage from "../pages/admin/MePage";
import UsersPage from "../pages/admin/UsersPage";
import ConfigPage from "../pages/admin/ConfigPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "comics", element: <ComicsPage /> },
      { path: "comics/:id", element: <ComicDetailPage /> },
      { path: "blogs", element: <BlogsPage /> },
      { path: "blogs/:id", element: <BlogDetailPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    element: <ProtectedLayout />,
    children: [{ path: "/favorites", element: <FavoritesPage /> }],
  },
  {
    element: <AdminLayout />,
    children: [
      { path: "/me", element: <MePage /> },
      { path: "/admin/users", element: <UsersPage /> },
      { path: "/admin/config", element: <ConfigPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
