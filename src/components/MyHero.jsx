import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LaptopImg from "../assets/img/png/laptop.png";
import BgHero from "../assets/img/png/bg_hero_full_img.png";
import BGGrouping from "../assets/img/png/bg_img_grouping.png";

import BlackBAll from "../assets/img/svg/black_ball.svg";
import YellowCross from "../assets/img/svg/yellow_cross.svg";
import YellowDots from "../assets/img/svg/yellow_dots.svg";
const MyHero = () => {
  return (
    <>
      <section className="position-relative">
        <img
          className="position-absolute bg_img_hero d-none d-xxl-block"
          src={BgHero}
          alt="BgHero"
        />
        <img
          className="position-absolute full_img_set_header w-100 d-xxl-none"
          src={BGGrouping}
          alt="BGGrouping"
        />

        <img
          className="position-absolute yellow_dots_set d-none d-md-block"
          src={YellowDots}
          alt="YellowDots"
        />

        <Container className="position-relative">
          <img
            className="position-absolute yellow_cross_set d-none d-md-block "
            src={YellowCross}
            alt="YellowCross"
          />
          <Row className="align-items-center flex-column-reverse flex-lg-row pb-5">
            <Col lg={5}>
              <div className="text-center text-lg-start mt-5 mt-lg-0">
                <h1 className="ff_inter fw-lite fs-45 clr_dark_blue">
                  Increased Efficiency
                </h1>
                <p className="ff_inter fw-bold fs-88 clr_dark_blue">
                  Through Automation
                </p>
                <p className="clr_black ff_inter fw-normal fs-md">
                  We have
                  <span className="fw-bold">
                    automated invoice distribution
                  </span>
                  from as our automation initiatives.
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <div className="text-center">
                <img className="w-100 " src={LaptopImg} alt="LaptopImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MyHero;
