import logo from "../images/logo1.png";
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="container p-4">
        <section className="mb-4">
          <NavLink
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1 shadow-icon "
            to="https://www.facebook.com/netcomatccdac"
            role="button">
            <i className="fab fa-facebook-f"></i>
          </NavLink>

          <NavLink
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-2 shadow-icon"
            to="https://twitter.com/NetcomAtcCdac"
            role="button">
            <i className="fab fa-twitter"></i>
          </NavLink>

          <NavLink
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-2 shadow-icon"
            to="https://in.pinterest.com/netcomatccdac/"
            role="button">
            <i className="fab fa-pinterest"></i>
          </NavLink>

          <NavLink
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-2 shadow-icon"
            to="https://www.instagram.com/netcom_atc_cdac/"
            role="button">
            <i className="fab fa-instagram"></i>
          </NavLink>
          <NavLink
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-2 shadow-icon"
            to="https://www.linkedin.com/in/netcom-atc-cdac/"
            role="button">
            <i className="fab fa-linkedin-in"></i>
        </NavLink>
          <NavLink
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-2 shadow-icon"
            to="https://api.whatsapp.com/send?phone=917665010205&text=From%20CDAC%20ATC%20JAIPUR,%20providing%20you%20complete%20skill%20development%20%20under%20the%20Govt%20program%20-%20TECH%20SANGAM%20.%20Kindly%20visit%20our%20website%20www.netcomedu.in&source=&data="
            role="button">
            <i className="fab fa-whatsapp"></i>
          </NavLink>
        </section>
        
        
        <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <img src={logo} width={150} height={50} alt="" />
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          Projects
          </h6>
          <p>
            <NavLink to="https://socialbharat.org/" className="text-reset"> Social Bharat</NavLink>
          </p>
          <p>
            <NavLink to="https://greenbharat.co.in/" className="text-reset">Green Bharat</NavLink>
          </p>
          <p>
            <NavLink to="https://yogapower.in/#/YogaPower" className="text-reset">Yoga Power</NavLink>
          </p>
          <p>
            <NavLink to="http://ims.netparam.in/" className="text-reset">IMS</NavLink>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <NavLink to="/terms" className="text-reset">Terms & Conditions</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">Placements</NavLink>
          </p>
          <p>
            <NavLink to="https://netparam.in/uploads/hostel.pdf" className="text-reset">Hostel Details</NavLink>
          </p>
          <p>
            <NavLink to="/contact" className="text-reset">Contact</NavLink>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> 747, Janpath, Rani Sati nagar, Nirman nagar, Jaipur-302019</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            placement@netparam.in
          </p>
          <p><i className="fas fa-phone me-3"></i>  +91-96492-72709</p>
        </div>
      </div>
    </div>
  </section>
      </div>
      <div
        className="text-center p-3"
        style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2024, <NavLink className="text-reset fw-bold" to="https://www.netcomedu.in/">
        Netparam Jaipur
        </NavLink>. All rights are reserved.
        
      </div>
    </footer>
  );
};

export default Footer;
