import CompanyList from "./CompanyList";
import LifeAt from "./LifeAt";
import Projects from "./Projects";
// import Projectss from "./Projectss";
import Testimonial from "./Testimonial";
import About from "./About";
// import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="container-fluid animate-fadeIn p-md-0 p-sm-3">
          <div className="row flex-lg-nowrap align-items-center">
            <div className="order-lg-1 col-lg-12">
              <img
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%)",
                }}
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="d-block img-fluid"
                alt="Photo by Milad Fakurian"
                width="1060"
                height="468"
              />
            </div>

            <div className="col-lg-6 col-xl-5 text-center text-lg-start pt-lg-5 mt-xl-4 mx-0 mx-sm-5">
              <div className="lc-block mb-4 mt-5">
                <div>
                  <span className="fw-bold">WELCOME TO NETPARAM</span>
                </div>
              </div>
              <div className="lc-block mb-4">
                <div>
                  <h1 className="fw-bold display-3">EVERYTHING YOU</h1>
                </div>
              </div>
              <div className="lc-block mb-4">
                <div>
                  <h1 className="fw-bold display-3">CAN IMAGINE</h1>
                </div>
              </div>
              <h1 aria-label="Developer">
                <span className="typewriter"></span>
              </h1>
              <div className="lc-block mb-5">
                <div>
                  <p className="rfs-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc et metus id ligula malesuada placerat sit amet quis
                    enim.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nunc et metus id ligula malesuada placerat sit amet
                    quis enim.
                  </p>
                </div>
              </div>

              <div className="lc-block mb-6">
                {/* <NavLink
                  className="btn btn-success me-md-2 px-5 py-2 btn-lg enquiryBtn"
                  to="#"
                  role="button">
                  Programs
                </NavLink> */}
                <a
                  className="btn btn-success me-md-2 border border-1 px-5 py-2 btn-lg learnBtn"
                  href="#programs"
                  role="button">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <LifeAt />
      <CompanyList />
      <Testimonial />
    </>
  );
};

export default Home;
