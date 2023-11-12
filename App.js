import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./model/routes.js";
import { ThemeProvider } from "react-bootstrap";
import Home from "./components/pages/home/index.jsx";
import PublicLayout from "./components/layout/public-layout/index.jsx";
import AdminLayout from "./components/layout/admin-layout/index.jsx";
import AboutUs from "./components/pages/about-us/index.jsx";
import UserManagement from "./components/pages/user-management/index.jsx";
import Landing from "./components/pages/landing/index.jsx";
import Articles from "./components/pages/articles/index.jsx";
import Login from "./components/pages/login/index.jsx";
import Register from "./components/pages/register/index.jsx";
import Dashboard from "./components/pages/dashboard/index.jsx";
import NoLayout from "./components/layout/no-layout/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="landing" element={<Landing />} />
        <Route path="articles" element={<Articles />} />
      </Route>
      <Route element={<NoLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<UserManagement />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
