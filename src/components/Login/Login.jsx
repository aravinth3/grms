import "./Login.css";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div className="login">
      <div className="login-content">
        <div className="login-right my-4">
          <h5>Welcome Back!</h5>
          <div className="login-inputs mt-5">
            <form>
              <label className="login_label">Mobile Number</label>
              <input type="number" className="app_input" required />

              {/* <div className="pass-label d-flex justify-content-between">
                <label className="app_label mt-3">Password</label>
                <NavLink className="me-0 mt-3 ">Forgetten Password?</NavLink>
              </div> */}

              <div className="login2-button mt-3">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
