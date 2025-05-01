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

function App() {
  const router = createBrowserRouter([
    { path: "/register", element: <Register /> },
    { path: "/otp", element: <Otp /> },
    { path: "/login", element: <Login /> },
    { path: "/forgetPassword", element: <FrogetPassword /> },
    { path: "/forgetOtp", element: <ForgetOtp /> },
    { path: "/resetPassword", element: <ResetPassword /> },
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
