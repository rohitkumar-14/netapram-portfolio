const Testimonial = () => {
  return (
    <>
   

      <div className="container-fluid testimonial-bg">
        <div className="row testimonial-con">
          <div className="col-md-10 col-lg-8 mx-auto">
            <h1 className="testimonial-heading mb-4 text-center mt-5" style={{ fontSize: "60px" ,letterSpacing: "1px" }}>TESTIMONIALS</h1>
            <div className="lc-block py-5 text-center">
              <div
                id="carouselTestimonial"
                className="carousel slide pb-4"
                data-bs-ride="carousel">
                <div className="carousel-inner px-5">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-6 offset-md-3">
                        <div className="lc-block text-center mb-4">
                          <img
                            alt=""
                            className="rounded-circle"
                            src="https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                            style={{ width: "20vh" }}
                            loading="lazy"
                          />
                       

                        </div>
                        <div className="lc-block text-center">
                          <div >
                            <p className="fs-4">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vivamus leo nulla, suscipit non dapibus
                              vitae, dignissim id quam. Donec eget nulla
                              tellus.&nbsp;
                            </p>
                          </div>

                          <div>
                            <h5>
                              <strong>&nbsp;Eddie Valiant</strong>
                            </h5>
                          </div>

                          <small
                            
                            className="text-white"
                            style={{ letterSpacing: "1px" }}>
                            CEO of Acme Inc.&nbsp;
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-6 offset-md-3">
                        <div className="lc-block text-center mb-4">
                          <img
                            alt=""
                            className="rounded-circle"
                            src="https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                            style={{ width: "20vh" }}
                            loading="lazy"
                          />
                        </div>
                        <div className="lc-block text-center">
                          <div >
                            <p className="fs-4">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vivamus leo nulla, suscipit non dapibus
                              vitae, dignissim id quam. Donec eget nulla
                              tellus.&nbsp;
                            </p>
                          </div>

                          <div >
                            <h5>
                              <strong>&nbsp;Eddie Valiant</strong>
                            </h5>
                          </div>

                          <small
                            
                            className="text-white"
                            style={{ letterSpacing: "1px" }}>
                            CEO of Acme Inc.&nbsp;
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-6 offset-md-3">
                        <div className="lc-block text-center mb-4">
                          <img
                            alt=""
                            className="rounded-circle"
                            src="https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                            style={{ width: "20vh" }}
                            loading="lazy"
                          />
                        </div>
                        <div className="lc-block text-center">
                          <div >
                            <p className="fs-4">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vivamus leo nulla, suscipit non dapibus
                              vitae, dignissim id quam. Donec eget nulla
                              tellus.&nbsp;
                            </p>
                          </div>

                          <div >
                            <h5>
                              <strong>&nbsp;Eddie Valiant</strong>
                            </h5>
                          </div>

                          <small
                            
                            className="text-white"
                            style={{letterSpacing:"1px"}}>
                            CEO of Acme Inc.&nbsp;
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-100 text-center mt-3">
                  <a
                    className="carousel-control-prev position-relative d-inline me-4"
                    href="#carouselTestimonial"
                    data-bs-slide="prev">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="text-dark fs-4"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                    </svg>
                    <span className="visually-hidden">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next position-relative d-inline"
                    href="#carouselTestimonial"
                    data-bs-slide="next">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="text-dark fs-4"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                    <span className="visually-hidden">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
