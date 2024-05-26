import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

import Logo from "../../assets/images/logo-TerraPure.svg";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import Icon4 from "../../assets/images/icon-4.svg";
import Icon5 from "../../assets/images/icon-5.svg";
import appStore from "../../assets/images/app-store.jpg";
import Newsletter from "../../components/newsletter/index";
import googlePlay from "../../assets/images/google-play.jpg";
import NewsletterImg from "../../assets/images/newsletter.png";
import paymentImage from "../../assets/images/payment-method.png";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";

const Footer = () => {
  return (
    <>
      <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>
                Stay home & get your daily <br />
                needs from our shop
              </h2>
              <p>Start Your Daily Shopping with TerraPure</p>
              <br />
              <br className="res-hide" />
              <Newsletter />
            </div>
            <div className="img">
              <img src={NewsletterImg} className="w-100" />
            </div>
          </div>
        </div>
      </section>
      <div className="footerWrapper">
        <div className="footerBoxes">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon1} />
                  </span>
                  <div className="info">
                    <h4>Best prices & offers</h4>
                    <p>Orders Rp100.000 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon2} />
                  </span>
                  <div className="info">
                    <h4>Free delivery</h4>
                    <p>Orders Rp100.000 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon3} />
                  </span>
                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>Orders Rp100.000 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon4} />
                  </span>
                  <div className="info">
                    <h4>Wide assortment</h4>
                    <p>Orders Rp100.000 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon5} />
                  </span>
                  <div className="info">
                    <h4>Easy returns</h4>
                    <p>Orders Rp100.000 or more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1">
                <Link to="/">
                  <img src={Logo} />
                </Link>
                <br />
                <br />
                <p>TerraPure is the best E-Commerse on Earth.</p>
                <br />
                <p>
                  <LocationOnOutlinedIcon /> <strong>Address</strong>: Jl. Raya
                  Kb. Jeruk No.27, RT.1/RW.9, Kemanggisan, DKI Jakarta
                </p>
                <p>
                  <HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+62)
                  8123456789{" "}
                </p>
                <p>
                  <EmailOutlinedIcon /> <strong>Email:</strong>{" "}
                  terra.pure@tp.com
                </p>
                <p>
                  <WatchLaterOutlinedIcon /> <strong>Hours:</strong> 10:00 -
                  18:00, Mon - Sat
                </p>
              </div>
              <div className="col-md-6 part2">
                <div className="row">
                  <div className="col">
                    <h3>Company</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Support Center</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Company</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="#">Account</Link>
                      </li>
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Support Center</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Corporate</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Support Center</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Popular</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Support Center</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 part3">
                <h3>Install App</h3>
                <br className="res-hide" />
                <p>From App Store or Google Play</p>
                <div className="d-flex">
                  <Link to={""}>
                    <img src={appStore} width={150} />
                  </Link>
                  <Link to={""}>
                    <img src={googlePlay} className="mx-2" width={150} />
                  </Link>
                </div>
                <br />
                <p>Secured Payment Gateways</p>
                <img src={paymentImage} />
              </div>
            </div>
            <hr />
            <div className="row lastStrip">
              <div className="col-md-3 part_1">
                <p>© 2024, TerraPure - Binus University</p>
              </div>
              <div className="col-md-3 part3  part_3">
                <div className="d-flex align-items-center">
                  <h5>Follow Us</h5>
                  <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Link to={""}>
                        <FacebookOutlinedIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <TwitterIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <InstagramIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <YouTubeIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
