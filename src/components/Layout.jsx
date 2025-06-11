import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <main className="bg-primary text-white min-h-screen overflow-hidden relative">
      <Header />
      <div className="flex">
        <div className="bg-white w-full rounded-lg px-3 py-2 overflow-auto">
          <Outlet />
        </div>
        <Sidebar />
      </div>
    </main>
  );
}
