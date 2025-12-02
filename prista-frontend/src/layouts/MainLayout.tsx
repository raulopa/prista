import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar opcional */}
      {/* <Sidebar /> */}

      <main className="flex-1 p-6">
        {/* Navbar opcional */}
        {/* <Navbar /> */}

        <Outlet />
      </main>
    </div>
  );
}
