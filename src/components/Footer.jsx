import React from "react";
import { Image } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="px-5 py-4 bg-custom-primary flex-wrap d-flex">
        <div className="footer-left px-4 py-2">
          <Image src={logo} alt="logo-footer" height={70} />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ipsa
            velit nobis debitis illum aliquam aperiam praesentium asperiores
            architecto eveniet similique incidunt
          </p>
          <div className="socialIcons">
            <a
              className="text-secondary"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.facebook.com/"
              className="text-secondary"
              target="_blank"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-secondary"
            >
              <FaTwitter size={18} />
            </a>
            <a
              className="text-secondary"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
        <div className="footer-middle  px-4 py-2">
          <div className="menuItem">
            <h5>Our Company</h5>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="menuItem">
            <h5>Services</h5>
            <ul>
              <li>
                <Link to={"/comingsoon"}>Marketing Research</Link>
              </li>
              <li>
                <Link to={"/comingsoon"}>Market Analysis</Link>
              </li>
              <li>
                <Link to={"/comingsoon"}>SEO Consultancy</Link>
              </li>
              <li>
                <Link to={"/comingsoon"}>Page Ranking</Link>
              </li>
              <li>
                <Link to={"/comingsoon"}>SMM</Link>
              </li>
            </ul>
          </div>
          <div className="menuItem">
            <h5>Features</h5>
            <ul>
              <li>
                <Link to={"/comingsoon"}>Brand Strategy</Link>
              </li>
              <li>
                <Link to={"/comingsoon"}>Audience Analysis</Link>
              </li>
              <li>
                <Link to={"/comingsoon"}>Copyright</Link>
              </li>
              <li>
                <Link to={"/comingsoon"}>Team Training</Link>
              </li>
              <li>
                <Link to={"/comingsoon"}>Email Marketing</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right py-2 px-4 d-flex flex-column  ">
          <h5>Subscribe</h5>
          <input className=" rounded input-subscribe" />
          <button className="btn-subscribe">Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom text-center py-2 px-4">
        All copyrights are reserved by Exquisite Beauty
      </div>
    </footer>
  );
};

export default Footer;
