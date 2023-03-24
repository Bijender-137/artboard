import React from "react";
import { Container, Nav } from "react-bootstrap";
import NavLogo from "../assets/img/svg/nav_logo.svg";
import BlackCross from "../assets/img/svg/black_cross.svg";
import NavBall from "../assets/img/png/nav_ball.png";
import YellowNavBall from "../assets/img/svg/yellow_nav_ball.svg";
import GoogelAt from "../assets/img/svg/at_googel.svg";
const MyNav = () => {
  return (
    <>
      <section className="position-relative overflow-hidden">
        <img
          className="position-absolute nav_ball_set"
          src={NavBall}
          alt="NavBall"
        />
        <img
          className="position-absolute blck_crs_nav"
          src={BlackCross}
          alt="BlackCross"
        />
        <img
          className="position-absolute yellow_ball_nav_set"
          src={YellowNavBall}
          alt="YellowNavBall"
        />
        <img className="position-absolute googel_set_nav d-none d-md-block" src={GoogelAt} alt="GoogelAt" />

        <Nav className="py-4">
          <Container>
            <div className="d-flex align-items-center justify-content-between">
              <a href="#">
                <img src={NavLogo} alt="NavLogo" />
              </a>
              <ul className="d-flex align-items-center">
                <li>
                  <a
                    href="#"
                    className="clr_lite_blue ff_raleway fw-medium fs-xsm"
                  >
                    Home
                  </a>
                </li>
                <li className="ms-3 ms-sm-4 ms-md-5 ps-lg-3">
                  <a
                    href="#"
                    className="clr_lite_blue ff_raleway fw-medium fs-xsm"
                  >
                    About Us
                  </a>
                </li>
                <li className="ms-3 ms-sm-4 ms-md-5 ps-lg-3">
                  <a
                    href="#"
                    className="clr_lite_blue ff_raleway fw-medium fs-xsm"
                  >
                    Services
                  </a>
                </li>
                <li className="ms-3 ms-sm-4 ms-md-5 ps-lg-3">
                  <a
                    href="#"
                    className="clr_lite_blue ff_raleway fw-medium fs-xsm"
                  >
                    Premium
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </Nav>
      </section>
    </>
  );
};

export default MyNav;
