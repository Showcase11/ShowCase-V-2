import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer className="footer py-8 flex flex-wrap gap-14 items-center justify-center border-t-4 border-gray-300 ">
        <div className="text-center md:text-star ">
          <Link to="/">
            <img className="mx-auto w-[130px]" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="text-center md:text-start place-items-center md:place-items-start">
          <span className="footer-title text-xl opacity-100 text-[#0B1514]">
            Contact
          </span>
          <a
            className="link link-hover"
            href="mailto: works@creatt.in text-[#0B1514] text-[14px]"
          >
            Mail Us: works@creatt.in
          </a>
          <p className="link link-hover text-[14px]">Call Us: +1800 000 0001</p>
        </div>
        <div className="text-center lg:text-start  place-items-center md:place-items-start">
          <span className="footer-title text-xl opacity-100">Visit Us</span>
          <p className="link link-hover text-[14px]">
            123 Alberta St, San Francisco,
          </p>
          <p className="link link-hover text-[14px]">California 94114</p>
        </div>
        <div className="text-center lg:text-start   place-items-center md:place-items-start">
          <span className="footer-title text-xl opacity-100 text-[#0B1514]">
            Legal
          </span>
          <div>
            <div className="text-[14px]">
              Copyright © {year} Create Wire UI Kit All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
