import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    collegeName: "",
    joiningDate: "",
    program: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

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
              <h2 className="display-4 fw-bolder" style={{textShadow: "3px 5px white"}}>REGISTER FORM</h2>
              <p>
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col max-w-md  py-5 px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <section className="vh-100 pb-5 mb-5">
          <div className="container h-100 ">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-12 col-xl-11 ">
                <div
                  className="card text-black "
                  style={{ borderRadius: "25px" }}>
                  <div className="card-body p-md-5 ">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Register
                        </p>

                        <form action="#" className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                className="w-100 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                className="w-100 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Email"
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                className="w-100 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                name="phoneNumber"
                                value={user.phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number"
                              />

                              
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0">
                                  <select
                                    className="w-100 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    name="program"
                                    value={user.program}
                                    onChange={handleChange}>
                                    <option value="">Select Technology </option>
                                    <option value="Salesforce CRM(Admin & Developer)">
                                    Salesforce CRM(Admin & Developer)
                                    </option>
                                    <option value="Software Testing (Manual & Automation)">
                                    Software Testing (Manual & Automation)
                                    </option>
                                    <option value="Android (Mobile App Development)">
                                    Android (Mobile App Development)
                                    </option>
                                    <option value="PHP with CI and Laravel">
                                    PHP with CI and Laravel
                                    </option>
                                    <option value="Java Technologies (J2SE & J2EE)">
                                    Java Technologies (J2SE & J2EE)
                                    </option>
                                    <option value="Python with Django">
                                    Python with Django
                                    </option>
                                    <option value="Angular JS with Ionic (MEAN Stack)">
                                    Angular JS with Ionic (MEAN Stack)
                                    </option>
                                    <option value="React JS (MERN Stack)">
                                    React JS (MERN Stack)
                                    </option>
                                    <option value="Data Science with Python/R/Spark">
                                    Data Science with Python/R/Spark
                                    </option>
                                    <option value="Cyber Security with VAPT,CISA,CISSP">
                                    Cyber Security with VAPT,CISA,CISSP
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    className="w-100 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    name="collegeName"
                                    value={user.collegeName}
                                    onChange={handleChange}
                                    placeholder="College Name"
                                  />
                                </div>
                              </div>


                          <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0">
                                  <input
                                    type="date"
                                    className="w-100 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    name="joiningDate"
                                    value={user.joiningDate}
                                    onChange={handleChange}
                                    placeholder="Joining Date"
                                  />
                                </div>
                              </div>
                             
                              

                             

                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button
                                  type="submit"
                                  data-mdb-button-init
                                  data-mdb-ripple-init
                                  className="py-2 px-4 btn btn-success border-0  me-md-2 px-5 py-2 btn-lg enquiryBtn"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    const {
                                      name,
                                      email,
                                      phoneNumber,
                                      collegeName,
                                      joiningDate,
                                      program,
                                    } = user;
                                    if (
                                      name &&
                                      email &&
                                      phoneNumber &&
                                      collegeName &&
                                      joiningDate &&
                                      program
                                    ) {
                                      axios
                                        .post(
                                          "http://localhost:6969/register",
                                          user
                                        )
                                        .then((res) => console.log(res));
                                    } else {
                                      alert("Please fill in all fields");
                                    }
                                  }}>
                                  Register
                                </button>
                              </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
