import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/navbar";
import SideBar from "../components/sidebar/sidebar";

export default function MainLayout() {


  return (
    <main className="flex-1 w-full flex flex-col">
      <NavBar />
      <div className="relative z-0 flex">
        <div className="min-h-screen flex w-1/10 z-0 relative">
          <SideBar />
        </div>
        <div className="w-9/10 min-h-screen">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
