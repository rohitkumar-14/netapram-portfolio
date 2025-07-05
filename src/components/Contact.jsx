import { useState } from "react";
import axios from "axios";
const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    collegeName: "",
    message: "",
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
          className="d-flex text-center position-relative contact-bg"
          style={{
            minHeight: "20vh",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#eee",
            
          }}>
          <div className="overlay"></div>

          <div className="lc-block my-3 align-self-center w-100 py-5 position-relative">
            <div>
              <h2 className="display-4 fw-bolder" style={{textShadow: "3px 5px white"}}>CONTACT US</h2>
              <p>
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex justify-content-center my-5">
              <div className="lc-block col-lg-8 ">
                <div>
                  <h2>GET IN TOUCH WITH US</h2>

                  <div className="col-md-4 col-lg-3 col-xl-6 mb-md-0 mb-4">
                    <hr />
                    <p>
                      <i className="fas fa-phone me-3"></i> +91-96492-72709
                    </p>
                    <hr />
                    <p>
                      <i className="fas fa-envelope me-3"></i>
                      placement@netparam.in &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;hr@netparam.in
                    </p>
                    <hr />
                    <p>
                      <i className="fa-solid fa-globe me-3"></i>
                      www.netparam.in
                    </p>
                    <hr />
                    <p>
                      <i className="fas fa-home me-3"></i> 747, Janpath, Rani
                      Sati nagar, &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Nirman
                      nagar, Jaipur-302019
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-5">
              <div className="lc-block overflow-hidden ">
                <h2>OUR LOCATION</h2>
                <div className="ratio ratio-1x1">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.584566064823!2d75.74304!3d26.884937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4ebf68873e7%3A0xfe3139bb58bc2569!2s747%2C%20Jan%20Path%2C%20Rani%20Sati%20Nagar%2C%20Nirman%20Nagar%2C%20Brijlalpura%2C%20Jaipur%2C%20Rajasthan%20302019!5e0!3m2!1sen!2sin!4v1715695343343!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container py-5">
          <div className="p-5 lc-block text-center">
            <div className="lc-block">
              <div>
                <h2 className="fw-bolder display-4">Send Us Message</h2>
              </div>
            </div>
            <div className="lc-block col-md-12">
              <div>
                <p className="lead">
                  If you have some feedback or want to ask any questions
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 lc-block shadow rounded-3 col-xl-10 offset-xl-1">
            <form>
              <div className="d-flex gap-2">
                <div className="form-group mb-4 col-md-6">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    autoComplete="off"
                    hidden=""
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group mb-4 col-md-6">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group mb-4">
                <input
                  name="collegeName"
                  type="text"
                  className="form-control"
                  placeholder="College Name"
                  value={user.collegeName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mb-4">
                <label>Your Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="3"
                  placeholder="Write your Message Here"
                  maxLength="300"
                  value={user.message}
                  onChange={handleChange}></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-success me-md-2 px-5 py-2 btn-lg enquiryBtn"
                onClick={(e) => {
                  e.preventDefault();
                  const { name, email, collegeName, message } = user;
                  if (name && email && collegeName && message) {
                    axios
                      .post("http://localhost:6969/contact", user)
                      .then((res) => console.log(res));
                  } else {
                    alert("Please fill in all fields");
                  }
                }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
