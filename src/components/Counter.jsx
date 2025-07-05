import { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const [customers, setCustomers] = useState(0);
  const [hours, setHours] = useState(0);
  const [value, setValue] = useState(0);

  const customersRef = useRef(null);
  const hoursRef = useRef(null);
  const valueRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.5, // Trigger when at least 50% of the element is visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the counters when the element becomes visible
          const updateCounters = () => {
            const incrementCustomers = 240 / 20;
            const incrementHours = 1244 / 200;
            const incrementValue = 1600 / 200;
          
            setCustomers(prevCustomers => {
              if (prevCustomers < 240) {
                const newCustomers = Math.ceil(prevCustomers + incrementCustomers);
                return newCustomers > 240 ? 240 : newCustomers;
              }
              return prevCustomers;
            });
          
            setHours(prevHours => {
              if (prevHours < 1244) {
                const newHours = Math.ceil(prevHours + incrementHours);
                return newHours > 1244 ? 1244 : newHours;
              }
              return prevHours;
            });
          
            setValue(prevValue => {
              if (prevValue < 1600) {
                const newValue = Math.ceil(prevValue + incrementValue);
                return newValue > 1600 ? 1600 : newValue;
              }
              return prevValue;
            });
          };
          

          // Call updateCounters every second
          const intervalId = setInterval(updateCounters, 500);

          // Clear interval when the limit is reached for each counter
          return () => {
            clearInterval(intervalId);
            if (customers >= 240) setCustomers(240);
            if (hours >= 1244) setHours(1244);
            if (value >= 1600) setValue(1600);
          };
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (customersRef.current) observer.observe(customersRef.current);
    if (hoursRef.current) observer.observe(hoursRef.current);
    if (valueRef.current) observer.observe(valueRef.current);

    return () => {
      if (customersRef.current) observer.unobserve(customersRef.current);
      if (hoursRef.current) observer.unobserve(hoursRef.current);
      if (valueRef.current) observer.unobserve(valueRef.current);
    };
  }, []);
  return (
    <section className="py-4 py-lg-6 mb-4 mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0 text-center">
            <div className="lc-block mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                fill="currentColor"
                viewBox="0 0 16 16"
                
                lc-helper="svg-icon"
              >
                <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"></path>
              </svg>
            </div>
            <div className="lc-block">
              <span className="display-4" ref={customersRef}>
                <b className="fw-bold">{customers}</b>
              </span>
              <div>Customers</div>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0 text-center">
            <div className="lc-block mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                fill="currentColor"
                viewBox="0 0 16 16"
              
                lc-helper="svg-icon"
              >
                <path d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                <path d="M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 .5.5 0 0 1 1 0 5.5 5.5 0 0 0 8.001 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2zM8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
              </svg>
            </div>
            <div className="lc-block">
              <span className="display-4" ref={hoursRef}>
                <b className="fw-bold">{hours}</b>
              </span>
              <div>Hours</div>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0 text-center">
            <div className="lc-block mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                fill="currentColor"
                viewBox="0 0 16 16"
                
                lc-helper="svg-icon"
              >
                <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"></path>
              </svg>
            </div>
            <div className="lc-block">
              <span className="display-4" ref={valueRef}>
                <b className="fw-bold">{value}</b>
              </span>
              <div>Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
