import { NavLink } from "react-router-dom"


const Intership = () => {
  return (
    <>
      <section>
        <div
          className="d-flex text-center position-relative"
          style={{
            minHeight: "20vh",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#eee",
            backgroundImage:
              "url(https://netparam.in/uploads/banners/strategy.jpg)",
          }}>
          <div className="overlay"></div>

          <div className="lc-block my-3 align-self-center w-100 py-5 position-relative">
            <div>
              <h2 className="display-4 fw-bolder" style={{textShadow: "3px 5px white"}}>INTERNSHIP PROGRAM</h2>
              <p>
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="https://th.bing.com/th/id/OIP.JbEx2EVQ9gK_XFUU8uvUdAHaE8?pid=ImgDet&w=208&h=138&c=7&dpr=1.5"
                className="d-block mx-lg-auto img-fluid rounded-3"
                alt="Photo by Daniele Levis Pelusi"
                loading="lazy"
                srcSet="https://th.bing.com/th/id/OIP.JbEx2EVQ9gK_XFUU8uvUdAHaE8?pid=ImgDet&w=208&h=138&c=7&dpr=1.5"
                sizes="(max-width: 1080px) 100vw, 1080px"
                width="1080"
                height="768"
              />
            </div>
            <div className="col-lg-6">
              <div className="lc-block mb-3">
                <div>
                  <h1 className="fw-bold display-5">Internship Program</h1>
                </div>
              </div>

              <div className="lc-block mb-5">
                <div>
                  <p className="lead">
                    An internship is the professional learning experience in
                    student life or career growth. the student learns lots of
                    concepts, a trick to implement ideas about the project, earn
                    knowledge about the language to make a professional career
                    in particular field etc.
                  </p>
                </div>
              </div>

              <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
              <NavLink
                  className="btn btn-success me-md-2 px-5 py-2 btn-lg enquiryBtn"
                  to="/register"
                  role="button">
                  REGISTER / ENQUIRY
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="container py-md-6 py-4 border border-1 shadow rounded">
          <div className="row justify-content-center mb-4 p-4">
      <div className="col-md-12">
        <h2 className="text-center ">Internship Program</h2>
        <p>An internship is the professional learning experience in student life or career growth. The student learns lots of concepts, tricks to implement ideas about the project, earn knowledge about the language to make a professional career in a particular field, etc.</p>
        <p>NETPARAM TECHNOLOGIES PVT LTD prepares trainees for jobs that are based on manual or practical activities, related to a specific trade or technical education domain as the trainee directly develops expertise in a particular group of techniques or technology. We help you to nurture your programming knowledge, skills and build a successful path for your long and progressive career. Working on a Live Project is another feather in cap for our organization, due to working in IT industry, you are given a chance to work on real Live Projects of web design, development, Research and development and integration.</p>
        <h2>Internship Curriculum:</h2>
        <p>The Internship Curriculum includes training on Requisite Technologies along with working on the Project. The students need to be flexible in any technology during the Internship Period and need to be punctual and disciplined during their complete six months of Internship.</p>
        <h2>Major Highlights:</h2>
        <ul>
          <li>Student will be working on Live Projects which will help them to enhance their skill.</li>
          <li>Effect On your Resume</li>
          <li>Gain Confidence with valuable company reference.</li>
          <li>Placement support for all the interns.</li>
        </ul>
        <h2>How To Apply?</h2>
        <p><strong>Selection Criteria for Internship:</strong></p>
        <ol>
          <li><strong>Stipend-based Internship:</strong> For those who score a minimum of 60% in the Technical Test and qualify in the Interview. The minimum stipend will be Rs. 8,000/- per month.</li>
          <li><strong>Free Internship:</strong> Students who score a minimum of 55% will be included in the free internship program.</li>
          <li><strong>If students do not qualify the Technical Test OR internship with learn new technology (learning charge applicable).</strong></li>
        </ol>
        <p>Select any one Technology for Internship Test/interview:</p>
        <ul className="courses">
          <li><NavLink to="#">Salesforce CRM(Admin & Developer)</NavLink></li>
          <li><NavLink to="#">Software Testing (Manual & Automation)</NavLink></li>
          <li><NavLink to="#">Android (Mobile App Development)</NavLink></li>
          <li><NavLink to="#">PHP with CI and Laravel</NavLink></li>
          <li><NavLink to="#">Java Technologies (J2SE & J2EE)</NavLink></li>
          <li><NavLink to="#">Python with Django</NavLink></li>
          <li><NavLink to="#">Angular JS with Ionic (MEAN Stack)</NavLink></li>
          <li><NavLink to="#">React JS (MERN Stack)</NavLink></li>
          <li><NavLink to="#">Data Science with Python/R/Spark</NavLink></li>
          <li><NavLink to="#">Cyber Security with VAPT,CISA,CISSP</NavLink></li>
        </ul>
        <p>Student can directly Register or Enquiry at <NavLink to="http://www.netparam.in">www.netparam.in</NavLink> or can contact their respective TPO. Internship Certificate will be given by <b>NETPARAM TECHNOLOGIES PVT. LTD.</b> after project presentation.</p>
        <p><strong>Interview Date and Time:</strong> will be decided mutually after enquiry or registration</p>
        <p><strong>Venue:</strong> NETPARAM TECHNOLOGIES PVT. LTD. 747, Janpath, Nirman Nagar, Jaipur-302019</p>
        <p><strong>Contact:</strong> 7665010205</p>
      </div>
    </div>
            
        </div>
      </section>
    </>
  );
};

export default Intership;
