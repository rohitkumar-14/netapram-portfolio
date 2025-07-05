import logo from "../images/logo1.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} width={180} height={50} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  PROGRAMS
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/intership" target="_blank">
                    Internship Program
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/pgdac" target="_blank">
                    PG Diploma in Advanced Computing (PG-DAC)
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/ccat" target="_blank">
                    C-DAC’s Common Admission Test (C-CAT)
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  GALLERY
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  PROJECTS
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="https://greenbharat.co.in/" target="_blank">
                    Green Bharat
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="https://yogapower.in/#/YogaPower" target="_blank">
                    Yoga Power
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="http://ims.netparam.in/" target="_blank">
                    IMS- Institue Management System
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="https://socialbharat.org/" target="_blank">Social Bharat
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                
                <a className="nav-link" href="#about">
                  ABOUT US
                </a>
                {/* <NavLink className="nav-link" to="/about">
                ABOUT US
                </NavLink> */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>

            <button
              className="btn btn-success rounded-5 px-5 py-2 registerBtn"
              type="submit">
              <NavLink to="/register">Register</NavLink> 
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
