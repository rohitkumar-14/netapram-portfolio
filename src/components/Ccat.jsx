import { NavLink } from "react-router-dom"


const Ccat = () => {
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
                C-DAC’S COMMON ADMISSION TEST (C-CAT)
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
                src="https://i.ytimg.com/vi/gBs1e_6j2iU/hqdefault.jpg"
                className="d-block mx-lg-auto img-fluid rounded-3"
                alt="Photo by Daniele Levis Pelusi"
                loading="lazy"
                srcSet="https://i.ytimg.com/vi/gBs1e_6j2iU/hqdefault.jpg"
                sizes="(max-width: 1080px) 100vw, 1080px"
                width="1080"
                height="768"
              />
            </div>
            <div className="col-lg-6">
              <div className="lc-block mb-3">
                <div>
                  <h1 className="fw-bold display-5">C-CAT</h1>
                </div>
              </div>

              <div className="lc-block mb-5">
                <div>
                  <p className="lead">
                    Admissions to all PG Diploma courses are done through
                    C-DAC’s Common Admission Test (C-CAT) that will be conducted
                    in computerised mode physically at C-DAC’s test centres.
                    Candidates have to apply for C-CAT online at www.cdac.in or
                    acts.cdac.in
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
                C-DAC’s Common Admission Test (C-CAT)
              </h2>
              <p>
                Admissions to all PG Diploma courses are done through C-DAC’s
                Common Admission Test (C-CAT) that will be conducted in
                computerised mode physically at C-DAC’s test centres. Candidates
                have to apply for C-CAT online at{" "}
                <NavLink to="http://www.cdac.in">www.cdac.in</NavLink> or{" "}
                <NavLink to="http://acts.cdac.in">acts.cdac.in</NavLink>. Candidates who
                clear the C-CAT will only be considered for admission to C-DAC’s
                PG Diploma courses on the basis of their C-CAT ranks and
                centre/course preferences.
              </p>
              <p>
                C-CAT Test Papers: C-CAT has three sections (Section A, Section
                B, Section C) of one-hour duration each. Depending on the
                category of courses selected by the candidate, he/she will have
                to either appear for just one test paper (Section A) or two test
                papers (Section A and Section B) or all three test papers
                (Section A, Section B, and Section C). The medium of C-CAT is
                English.
              </p>
              <h2>C-CAT Syllabus</h2>
              <p>
                Indicative syllabus of the different sections of test papers in
                C-CAT:
              </p>
              <h2>TEST PAPER TOPICS</h2>
              <ul>
                <li>
                  <strong>Section A</strong>: English, Quantitative Aptitude,
                  Reasoning, Computer Fundamentals & Concepts of Programming
                </li>
                <li>
                  <strong>Section B</strong>: C Programming, Data Structures,
                  Object Oriented Programming Concepts using C++, Operating
                  Systems & Networking, Basics of Big Data & Artificial
                  Intelligence
                </li>
                <li>
                  <strong>Section C</strong>: Computer Architecture, Digital
                  Electronics, Microprocessors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ccat;
