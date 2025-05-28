import { Navigate } from "react-router-dom";
import { baseUrl } from "../utilities/Apis";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/UserSlice";
import { useQuery } from "react-query";

export default function ProtectedRoutes({ children }) {
  const isLoggedIn = !!localStorage.getItem("userID"); // or "isLoggedIn"
  const dispatch = useDispatch();
  async function getUserData() {
    if (!isLoggedIn) return;
    const data = await axios.get(
      `${baseUrl}/user/${localStorage.getItem("userID")}`
    );

    return data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUserData,
    enabled: isLoggedIn,
    refetchOnWindowFocus: false, // ✅ Don't refetch on tab focus
    refetchOnMount: false, // ✅ Don't refetch on remount
    staleTime: 1000 * 60 * 5, // ✅ Consider data fresh for 5 mins
    onSuccess: (res) => {
      dispatch(updateUser(res.data));
    },
  });

  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (isLoading) return "pppp";
  return children;
}
