import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <main className="bg-primary text-white">
      <Header />
      <div className="flex justify-between">
        <div className=" bg-white w-full rounded-lg px-3 py-2 ">
          <Outlet />
        </div>
        <Sidebar />
      </div>
    </main>
  );
}
