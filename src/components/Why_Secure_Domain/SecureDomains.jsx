import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

const WhySecureDomains = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const { ref: contentRef1, inView: contentInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const { ref: contentRef2, inView: contentInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const { ref: contentRef3, inView: contentInView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const { ref: contentRef4, inView: contentInView4 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const { ref: contentRef5, inView: contentInView5 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const { ref: contentRef6, inView: contentInView6 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const titleEl = useRef(null);
  const contentEl1 = useRef(null);
  const contentEl2 = useRef(null);
  const contentEl3 = useRef(null);
  const contentEl4 = useRef(null);
  const contentEl5 = useRef(null);
  const contentEl6 = useRef(null);

  useEffect(() => {
    if (titleInView) {
      gsap.fromTo(
        titleEl.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      );
    }
  }, [titleInView]);

  useEffect(() => {
    if (contentInView1) {
      gsap.fromTo(
        contentEl1.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      );
    }
  }, [contentInView1]);

  useEffect(() => {
    if (contentInView2) {
      gsap.fromTo(
        contentEl2.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      );
    }
  }, [contentInView2]);

  useEffect(() => {
    if (contentInView3) {
      gsap.fromTo(
        contentEl3.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      );
    }
  }, [contentInView3]);

  useEffect(() => {
    if (contentInView4) {
      gsap.fromTo(
        contentEl4.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      );
    }
  }, [contentInView4]);

  useEffect(() => {
    if (contentInView5) {
      gsap.fromTo(
        contentEl5.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      );
    }
  }, [contentInView5]);

  useEffect(() => {
    if (contentInView6) {
      gsap.fromTo(
        contentEl6.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      );
    }
  }, [contentInView6]);

  // Define styles
  const containerStyle = {
    width: "100%",
    backgroundColor: "#000312",
    color: "white",
    padding: "50px 0",
  };

  const titleStyle = {
    fontFamily: "Poppins",
    fontWeight: "bold",
    marginBottom: "50px",
  };

  const imageStyle = {
    width: "114px",
    height: "80px",
    borderRadius: "20px",
    backgroundColor: "#000829",
    textAlign: "center",
    padding: "15px",
    marginBottom: "15px",
    marginLeft: "15px",
  };

  const textStyle = {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "20px",
  };

  const paragraphStyle = {
    fontFamily: "Poppins",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <div className="container">
        <h2
          ref={(el) => {
            titleRef(el);
            titleEl.current = el;
          }}
          className="text-center"
          style={titleStyle}
        >
          Why Secure Domains
        </h2>
        <div className="row mb-4">
          <div
            ref={(el) => {
              contentRef1(el);
              contentEl1.current = el;
            }}
            className="col-lg-6 col-md-6 col-12 d-flex flex-column flex-md-row align-items-center mb-4"
            style={{
              display: "flex",
              flexDirection: window.innerWidth <= 767 ? "column" : "row",
              alignItems: "center",
            }}
          >
            <div className="text-md-end text-center order-md-1 order-0">
              <div
                className="icon mb-3 mb-md-0 order-md-2 order-1 d-md-none m-auto"
                style={imageStyle}
              >
                <img
                  src="cloud.png"
                  alt="Cloud DNS Visibility"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <h4 style={textStyle}>Global Reach</h4>
              <p style={paragraphStyle}>
                Secure Domains offers the services of DNS Armor™ across 25
                different data centers across the globe from both the service
                point and the storage location of security logs. The data
                centers spread throughout the Americas, EU, Middle East, Africa,
                Asia & Australia.
              </p>
            </div>
            <div
              className="icon mb-3 mb-md-0 order-md-2 order-1 d-md-block d-none"
              style={imageStyle}
            >
              <img
                src="cloud.png"
                alt="Cloud DNS Visibility"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>

          <div
            ref={(el) => {
              contentRef2(el);
              contentEl2.current = el;
            }}
            className="col-lg-6 col-md-6 col-12 d-flex flex-column flex-md-row align-items-center mb-4"
            style={{
              display: "flex",
              flexDirection: window.innerWidth <= 767 ? "column" : "row",
              alignItems: "center",
            }}
          >
            <div
              className="text-md-start text-center order-md-2 order-1"
              style={{ marginLeft: "20px" }}
            >
              <h4 style={textStyle}>Native Multi-Tenancy</h4>
              <p style={paragraphStyle}>
                DNS Armor ™ is the only Cloud based DNS Firewall solution in MEA
                supporting complete isolation thru native multi tenancy for
                customers and MSPs demanding this feature. By isolating each
                tenant's data from one another and ensuring its invisibility,
                the software architecture guarantees data security and privacy
                for all tenants.
              </p>
            </div>
            <div className="icon mb-3 mb-md-0 order-md-1 order-0" style={imageStyle}>
              <img
                src="c4.png"
                alt="Native Multi-Tenancy"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div
            ref={(el) => {
              contentRef3(el);
              contentEl3.current = el;
            }}
            className="col-lg-6 col-md-6 col-12 d-flex flex-column flex-md-row align-items-center mb-4"
            style={{
              display: "flex",
              flexDirection: window.innerWidth <= 767 ? "column" : "row",
              alignItems: "center",
            }}
          >
            <div className="text-md-end text-center order-md-1 order-0">
              <div
                className="icon mb-3 mb-md-0 order-md-2 order-1 d-md-none m-auto"
                style={imageStyle}
              >
                <img
                  src="c2.png"
                  alt="Log Archiving Strategy"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <h4 style={textStyle}>Log Archiving Strategy</h4>
              <p style={paragraphStyle}>
                DNS Armor ™ is the only Cloud based DNS Firewall solution that
                has a true modular design for confidential logs archiving and
                storage, ensuring compliance with local data residency
                regulations.
              </p>
            </div>
            <div
              className="icon mb-3 mb-md-0 order-md-2 order-1 d-md-block d-none"
              style={imageStyle}
            >
              <img
                src="c2.png"
                alt="Log Archiving Strategy"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>

          <div
            ref={(el) => {
              contentRef4(el);
              contentEl4.current = el;
            }}
            className="col-lg-6 col-md-6 col-12 d-flex flex-column flex-md-row align-items-center mb-4"
            style={{
              display: "flex",
              flexDirection: window.innerWidth <= 767 ? "column" : "row",
              alignItems: "center",
            }}
          >
            <div
              className="icon mb-3 mb-md-0 order-md-1 order-0"
              style={imageStyle}
            >
              <img
                src="c5.png"
                alt="Robust Security Intelligence"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div
              className="text-md-start text-center order-md-2 order-1"
              style={{ marginLeft: "20px" }}
            >
              <h4 style={textStyle}>Robust Security Intelligence</h4>
              <p style={paragraphStyle}>
                DNS ARMOR ™ is equipped with a total of 22 Threat Intelligence,
                +10M indicators, and 29 Web Categorization feeds in the Cloud
                DNS Firewall.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div
            ref={(el) => {
              contentRef5(el);
              contentEl5.current = el;
            }}
            className="col-lg-6 col-md-6 col-12 d-flex flex-column flex-md-row align-items-center mb-4"
            style={{
              display: "flex",
              flexDirection: window.innerWidth <= 767 ? "column" : "row",
              alignItems: "center",
            }}
          >
            <div className="text-md-end text-center order-md-1 order-0">
              <div
                className="icon mb-3 mb-md-0 order-md-2 order-1 d-md-none m-auto"
                style={imageStyle}
              >
                <img
                  src="c3.png"
                  alt="Log Archiving Strategy"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <h4 style={textStyle}>Customized solutions</h4>
              <p style={paragraphStyle}>
                Secure Domains aims to serve businesses of all sizes, which is
                why DNS Armor ™ is highly customizable and scalable such that
                its features and sizing can be adjusted and selected to suit the
                client’s needs unlike many other competitors where the offered
                solution is either a “ take all “ or a “ take non “ solution. A
                modifiable and sizable solution will be much more cost efficient
                than a rigid, standard solution.
              </p>
            </div>
            <div
              className="icon mb-3 mb-md-0 order-md-2 order-1 d-md-block d-none"
              style={imageStyle}
            >
              <img
                src="c3.png"
                alt="Log Archiving Strategy"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>

          <div
            ref={(el) => {
              contentRef6(el);
              contentEl6.current = el;
            }}
            className="col-lg-6 col-md-6 col-12 d-flex flex-column flex-md-row align-items-center mb-4"
            style={{
              display: "flex",
              flexDirection: window.innerWidth <= 767 ? "column" : "row",
              alignItems: "center",
            }}
          >
            <div
              className="icon mb-3 mb-md-0 order-md-1 order-0"
              style={imageStyle}
            >
              <img
                src="c6.png"
                alt="Robust Security Intelligence"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div
              className="text-md-start text-center order-md-2 order-1"
              style={{ marginLeft: "20px" }}
            >
              <h4 style={textStyle}>Robust Security Intelligence</h4>
              <p style={paragraphStyle}>
                DNS ARMOR ™ is equipped with a total of 22 Threat Intelligence,
                + 10M indicators and 29 Web Categorization feeds in the Cloud
                DNS Firewall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySecureDomains;
