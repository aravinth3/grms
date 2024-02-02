import img from "@/assets/logo.svg";
import profile from "@/assets/profile.jpg";
import "./DashNavbar.css";
import { TbLogout } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import dashMenus from "@/config/DashMenus";
const DashNavbar = () => {
  const menus = dashMenus(1);
  const navigate = useNavigate();
  const handleToggle = () => {
    const bodyEle = document.querySelector("body");
    if (bodyEle) {
      bodyEle.classList.toggle("toggle-sidebar");
    }
  };

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }
  console.log(menus);
  return (
    <header id="header" className="header d-flex ">
      <div className="d-flex align-items-center dashnav container">
        <div className="nav-logo me-auto">
          <img src={img} className="bi bi-list toggle-sidebar-btn d-flex" onClick={handleToggle} width="80px" height="100px" />
          {/* <img src={logo} /> */}
        </div>
        <div className=" mx-auto ms-0 me-auto">
          {menus?.map((menu, i) => (
            <span key={i}>
              <NavLink className="nav-menu mx-3" to={menu?.link}>
                {menu?.name}
              </NavLink>
            </span>
          ))}
        </div>

        <div className="dropdown">
          <a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={profile} alt="" className="profile" />
          </a>

          <ul className="dropdown-menu mx-auto" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item " href="#">
                <TbLogout className="logout-nav" /> Logout
              </a>
            </li>
          </ul>
        </div>
        {/* <img src={img} alt="" className="profile" /> */}
      </div>
    </header>
  );
};

export default DashNavbar;
