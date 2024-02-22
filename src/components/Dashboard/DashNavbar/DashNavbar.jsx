import img from "@/assets/logo.svg";
import "./DashNavbar.css";
import { TbLogout } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import dashMenus from "@/config/DashMenus";
const DashNavbar = () => {
  const role = localStorage.getItem("role_id");

  const menus = dashMenus(role);
  const handleToggle = () => {
    const bodyEle = document.querySelector("body");
    if (bodyEle) {
      bodyEle.classList.toggle("toggle-sidebar");
    }
  };
  const navigate = useNavigate();
  const handelLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header id="header" className="header d-flex ">
      <div className="d-flex align-items-center dashnav container-fluid">
        <div className="nav-logo">
          <h4 className="text-white fw-bold m-0">GR MANI STUDIO</h4>
          {/* <img src={logo} /> */}
        </div>
        <div className="mx-auto">
          {menus?.map((menu, i) => (
            <span key={i}>
              <NavLink className="nav-menu mx-2 text-decoration-none" to={menu?.link}>
                <span>{menu?.icon}</span> {menu?.name}
              </NavLink>
            </span>
          ))}
        </div>

        <div className="dropdown">
          <a className="dropdown-toggle text-decoration-none text-white" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            {role === "1" ? "Admin" : "Staff"}
          </a>

          <ul className="dropdown-menu mx-auto" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item text-dark " href="#" onClick={handelLogout}>
                <TbLogout className="logout-nav" /> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default DashNavbar;
