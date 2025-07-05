import { NavLink } from "react-router-dom"

const Pgdac = () => {
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
              <h2 className="display-4 fw-bolder" style={{textShadow: "3px 5px white"}}>
                PG DIPLOMA IN ADVANCED COMPUTING (PG-DAC)
              </h2>
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
                src="https://www.successcds.net/wp-content/uploads/2022/12/C-DAC-PG-Diploma-Admission.png"
                className="d-block mx-lg-auto img-fluid rounded-3"
                alt="Photo by Daniele Levis Pelusi"
                loading="lazy"
                srcSet="https://www.successcds.net/wp-content/uploads/2022/12/C-DAC-PG-Diploma-Admission.png"
                sizes="(max-width: 1080px) 100vw, 1080px"
                width="1080"
                height="768"
              />
            </div>
            <div className="col-lg-6">
              <div className="lc-block mb-3">
                <div>
                  <h1 className="fw-bold display-5">PG-DAC</h1>
                </div>
              </div>

              <div className="lc-block mb-5">
                <div>
                  <p className="lead">
                    Centre for Development of Advanced Computing (C-DAC) is a
                    scientific society of the Ministry of Electronics &
                    Information Technology, Government of India, carrying out
                    Research and Development (R&D) in IT, electronics and
                    associated areas.
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
      <section className="bg-light">
        <div className="container py-md-6 py-4">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center">
                  Centre for Development of Advanced Computing (C-DAC)
                </h2>
                <p>
                  C-DAC is a scientific society of the Ministry of Electronics &
                  Information Technology, Government of India, carrying out
                  Research and Development (R&D) in IT, electronics and
                  associated areas.
                </p>
                <p>Different thematic areas of C-DAC’s research include:</p>
                <ul>
                  <li>High Performance Computing</li>
                  <li>Grid and Cloud Computing</li>
                  <li>Multilingual Computing</li>
                  <li>Professional Electronics</li>
                  <li>Software Technologies</li>
                  <li>Cyber Security</li>
                  <li>Health Informatics</li>
                  <li>Ubiquitous Computing</li>
                  <li>Education & Training</li>
                </ul>
				<p>Presently C-DAC is offering Post Graduate Diploma courses through its centres located in Bengaluru, Chennai, Guwahati, Hyderabad, Kochi, Kolkata, Mumbai, Navi Mumbai, New Delhi, Noida, Patna, Pune, Silchar and Thiruvananthapuram. PG Diploma courses are also offered by C-DAC’s Authorised Training Centres in Bhubaneswar, Indore, <b>Jaipur</b>, Karad, Mumbai, Nagpur, Nashik, New Delhi, Patna and Pune. Each year, thousands of students are trained at these centres, enhancing their knowledge-base and equipping them with the latest methodologies in advanced computing so as to make their mark in the ICT industry. So far more than 3 lakh students have passed out from C-DAC. Many of them are successful employees of multi-national and premier Indian ICT companies today, and many more have become booming entrepreneurs.</p>
                <h2>Common Campus Placement Programme (CCPP)</h2>
                <p>
                  <b>Common Campus Placement Programme (CCPP)</b> is conducted for PG
                  Diploma students with the Placement Cells of C-DAC organizing
                  campus placements.
                </p>
                <p>
                  For the March 2024 batch, C-DAC’s CCPP will be conducted
                  region-wise at Bengaluru, Hyderabad, Mumbai, Noida, and Pune.
                  Training centres from other cities will be attached to one of
                  these placement regions, so that students from all centres
                  across India will get fair chance in placements. All C-DAC
                  training centres actively coordinate and organise campus
                  interviews for all their PG Diploma students.<b> More than 400
                  companies participated in C-DAC’s campus placements in 2021
                  and 2022, wherein 80-90% placement is achieved across India.</b> 
                </p>
                <h2>Post Graduate Diploma in Advanced Computing (PG-DAC)</h2>
                <p>
                  One of the most popular courses offered by C-DAC is{" "}
                  <strong>
                    Post Graduate Diploma in Advanced Computing (PG-DAC)
                  </strong>
                  . The major modules covered in PG-DAC are:
                </p>
                <ul>
                  <li>Operating System Concepts</li>
                  <li>C++ Programming</li>
                  <li>Object Oriented Programming in Java</li>
                  <li>Algorithms & Data Structures</li>
                  <li>Database Technologies</li>
                  <li>Software Development Methodologies</li>
                  <li>Web Programming Technologies</li>
                  <li>Web-based Java Programming</li>
                  <li>Microsoft .Net Technologies</li>
                  <li>Aptitude & Effective Communication</li>
                  <li>Software Project</li>
                </ul>
                <p>
                  The course aims to groom the students to enable them to work
                  on current technology scenarios as well as prepare them to
                  keep pace with the changing face of technology and the
                  requirements of the growing IT industry. The entire course
                  syllabus, courseware, teaching methodology and the course
                  delivery have been derived from the rich research and
                  development background of C-DAC. Running successfully for 25
                  years, the PG-DAC course has produced thousands of
                  professionals, who are well positioned in the industry today.
                </p>
              </div>
            </div>
          </div>
        
      </section>
    </>
  );
};

export default Pgdac;
