import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BgHero2 from "../assets/img/png/bg_img_1.png";
import YellowDots from "../assets/img/svg/yellow_dots.svg";
// import mydata from "./Card";
import DownArrow from "../assets/img/png/down-arrow-img-1.png";
import InboxImg from "../assets/img/png/img-2-main.png";
import InboxImg3 from "../assets/img/png/msg-box-img-3.png";
import InboxImg4 from "../assets/img/png/msg-box-img-4.png";
import BggrayImg from "../assets/img/png/bg_gray_img.png";
import RightArrow from "../assets/img/svg/right_arrow_img.svg";
import Football from "../assets/img/png/footbal_right.png";
const PreAutomation = () => {
  return (
    <>
      <section className="position-relative pt-sm-5 mt-lg-5 mt-xxl-0">
        <img
          className="position-absolute w-100 wave_2_set d-none d-xxl-block "
          src={BgHero2}
          alt="BgHero2"
        />
        <img
          className="bg_clr_main_section position-absolute zn-1 d-none d-lg-block"
          src={BggrayImg}
          alt="BggrayImg"
        />
        {/* <div className="bg_clr_main_section position-absolute"></div> */}
        <Container className="pt-5 position-relative  mt-lg-5 mt-xxl-0">
          <div className="text-center py-sm-5 mt-lg-5 mt-xxl-0">
            <h2 className="ff_inter fw-bold fs-70 clr_dark_blue ">
              Pre-Automation{" "}
            </h2>
            <p className="clr_black ff_inter fw-normal fs-md pt-3">
              <span className="fw-bold">Manually creating</span> and{" "}
              <span className="fw-bold">distributing invoices</span> -
              labor-intensive and prone to errors.
            </p>
          </div>
          <Row className="py-5 justify-content-center z_index">
            <Col sm={6} lg={4} xl={3}>
              <div className="shadow d-flex flex-column justify-content-center align-items-center py-5 h-100 position-relative ">
                <div className="card_img_shadow d-flex justify-content-center align-items-center">
                  <img src={DownArrow} alt="DownArrow" />
                </div>
                <h2 className="pt-4 px-4  text-center ff_inter fw-light fs-xsm">
                  Download invoices manually
                </h2>

                <img
                  className="position-absolute first_card d-none d-sm-block"
                  src={RightArrow}
                  alt="RightArrow"
                />
              </div>
            </Col>
            <Col className=" mt-4 mt-sm-0" sm={6} lg={4} xl={3}>
              <div className="shadow d-flex flex-column justify-content-center align-items-center py-5 h-100 position-relative ">
                <div className="card_img_shadow d-flex justify-content-center align-items-center">
                  <img src={InboxImg} alt="DownArrow" />
                </div>
                <h2 className="pt-4 px-4  text-center ff_inter fw-light fs-xsm">
                  Create an email for the tenant contact
                </h2>

                <img
                  className="position-absolute second_card d-none d-sm-block"
                  src={RightArrow}
                  alt="RightArrow"
                />
              </div>
            </Col>
            <Col className="mt-4 mt-lg-0 " sm={6} lg={4} xl={3}>
              <div className="shadow d-flex flex-column justify-content-center align-items-center  h-100 position-relative ">
                <div className="card_img_shadow d-flex justify-content-center align-items-center ">
                  <img src={InboxImg3} alt="DownArrow" />
                </div>
                <h2 className="pt-4 px-4  text-center ff_inter fw-light fs-xsm">
                  Send the e-mailmanually
                </h2>

                <img
                  className="position-absolute first_card d-none d-sm-block"
                  src={RightArrow}
                  alt="RightArrow"
                />
              </div>
            </Col>
            <Col className="mt-4 mt-xl-0" sm={6} lg={4} xl={3}>
              <div className="shadow d-flex flex-column justify-content-center align-items-center py-5 h-100  position-relative ">
                <div className="card_img_shadow d-flex justify-content-center align-items-center">
                  <img src={InboxImg4} alt="DownArrow" />
                </div>
                <h2 className="pt-4 px-4  text-center ff_inter fw-light fs-xsm">
                  Maintain communication records manually
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PreAutomation;
