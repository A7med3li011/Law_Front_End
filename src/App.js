import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Otp from "./pages/Auth/Otp";
import Register from "./pages/Auth/Register";
import Layout from "./components/Layout";
import Home from "./pages/Auth/Home";
import FrogetPassword from "./pages/Auth/ForgetPassword";
import ForgetOtp from "./pages/Auth/ForgetOtp";
import ResetPassword from "./pages/Auth/ResetPassword";
import Setting from "./pages/Setting";
import ProtectedRoutes from "./services/ProtectedRoutes";
import Support from "./pages/Support";
import ReverseProtectedRoutes from "./services/ReverseProtectedRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: (
        <ReverseProtectedRoutes>
          <Register />
        </ReverseProtectedRoutes>
      ),
    },
    {
      path: "/otp",
      element: (
        <ReverseProtectedRoutes>
          {" "}
          <Otp />{" "}
        </ReverseProtectedRoutes>
      ),
    },
    {
      path: "/login",
      element: (
        <ReverseProtectedRoutes>
          {" "}
          <Login />
        </ReverseProtectedRoutes>
      ),
    },
    {
      path: "/forgetPassword",
      element: (
        <ReverseProtectedRoutes>
          {" "}
          <FrogetPassword />{" "}
        </ReverseProtectedRoutes>
      ),
    },
    {
      path: "/forgetOtp",
      element: (
        <ReverseProtectedRoutes>
          {" "}
          <ForgetOtp />{" "}
        </ReverseProtectedRoutes>
      ),
    },
    {
      path: "/resetPassword",
      element: (
        <ReverseProtectedRoutes>
          {" "}
          <ResetPassword />{" "}
        </ReverseProtectedRoutes>
      ),
    },
    {
      path: "",
      element: (
        <ProtectedRoutes>
          <Layout />
        </ProtectedRoutes>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/setting", element: <Setting /> },
        { path: "/support", element: <Support /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
