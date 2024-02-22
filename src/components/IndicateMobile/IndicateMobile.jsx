import "./IndicateMobile.css";
import { FaLaptop } from "react-icons/fa";

const IndicateMobile = () => {
  return (
    <div className="indicate-mobile">
      <span>
        <FaLaptop />
      </span>
      <h6>Allowed Only On Laptops</h6>
    </div>
  );
};

export default IndicateMobile;
