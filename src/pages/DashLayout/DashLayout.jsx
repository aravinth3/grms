import DashNavbar from "@/components/Dashboard/DashNavbar/DashNavbar";
import "./DashLayout.css";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <>
      {/* <DashSidebar /> */}
      <main id="main" className="main">
        <DashNavbar />
        <div className="py-3 container-fluid">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DashLayout;
