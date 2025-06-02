import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Otp from "./pages/Auth/Otp";
import Register from "./pages/Auth/Register";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import FrogetPassword from "./pages/Auth/ForgetPassword";
import ForgetOtp from "./pages/Auth/ForgetOtp";
import ResetPassword from "./pages/Auth/ResetPassword";
import Setting from "./pages/Setting";
import ProtectedRoutes from "./services/ProtectedRoutes";
import Support from "./pages/Support";
import ReverseProtectedRoutes from "./services/ReverseProtectedRoutes";
import Question from "./pages/Question";

import FilterSearchPage from "./pages/ProjectPage/FilterSearchPage";
import Questionnaire from "./pages/Questionnaire/Questionnaire";
import NewQuestionnaire from "./pages/Questionnaire/NewQuestionnaire";
import Results from "./pages/Questionnaire/Results";
import Branchdetails from "./pages/ProjectPage/Branchdetails.jsx";
import Landing from "./pages/Landing/Landing.jsx";

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
      path: "/questions",
      element: (
        <ReverseProtectedRoutes>
          <Question />
        </ReverseProtectedRoutes>
      ),
    },
    {
      path: "/otp",
      element: (
        <ReverseProtectedRoutes>
          <Otp />
        </ReverseProtectedRoutes>
      ),
    },
    {
      path: "/login",
      element: (
        <ReverseProtectedRoutes>
          <Login />
        </ReverseProtectedRoutes>
      ),
    },
    {
      path: "/forgetPassword",
      element: (
        <ReverseProtectedRoutes>
          <FrogetPassword />
        </ReverseProtectedRoutes>
      ),
    },
    {
      path: "/forgetOtp",
      element: (
        <ReverseProtectedRoutes>
          <ForgetOtp />
        </ReverseProtectedRoutes>
      ),
    },
    {
      path: "/resetPassword",
      element: (
        <ReverseProtectedRoutes>
          <ResetPassword />
        </ReverseProtectedRoutes>
      ),
    },
    {
      path: "/",
      element: (
        <ReverseProtectedRoutes>
          <Landing />
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
        { path: "/home", element: <Home /> },
        { path: "/questionnaire", element: <Questionnaire /> },
        { path: "/newQuestionnaire", element: <NewQuestionnaire /> },
        { path: "/survey/:id", element: <Results /> },
        { path: "/setting", element: <Setting /> },
        { path: "/support", element: <Support /> },
        {
          path: "/FilterSearchPage",
          element: <FilterSearchPage />,
        },
        {
          path: "/FilterSearchPage/project/:id",
          element: <Branchdetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
