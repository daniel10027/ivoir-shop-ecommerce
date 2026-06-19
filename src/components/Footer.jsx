import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">
              🇨🇮 Fait avec ❤️ en Côte d'Ivoire par{" "}
              <a
                href="https://me.myoctogone.com"
                className="text-decoration-underline text-white fs-5"
                target="_blank"
                rel="noreferrer"
              >
                Daniel Guedegbe
              </a>
            </p>
            <a
              className="text-white fs-4"
              href="https://github.com/daniel10027"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
