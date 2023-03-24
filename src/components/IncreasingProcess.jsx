import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GreenArrow from "../assets/img/svg/green_arrow.svg";
import ManStudyImg from "../assets/img/png/study_man_img.png";
import GirlWorkLaptop from "../assets/img/png/girl_work_laptop.png";
import UperArrow from "../assets/img/png/uper_arrow.png";
import RightDots from "../assets/img/png/right_yellow_dots.png";
import LefttDots from "../assets/img/png/left_yellow_dots.png";
import Football from "../assets/img/png/footbal_right.png";
const IncreasingProcess = () => {
  return (
    <>
      <section className="py-5 position-relative">
        <img
          className="position-absolute uper_arow d-none d-sm-block"
          src={UperArrow}
          alt="UperArrow"
        />
        <img
          className="position-absolute right_dots"
          src={RightDots}
          alt="RightDots"
        />
        <img className="position-absolute footbaal_right" src={Football} alt="Football" />
        <img
          className="position-absolute left_dots"
          src={LefttDots}
          alt="LefttDots"
        />
        <Container>
          <div className="text-center">
            <h2 className="ff_inter fw-bold fs-50 clr_dark_blue">
              Increasing process efficiency by
            </h2>
            <div className="position-relative">
              <p className="ff_inter fw-bold fs-100 clr_green mt-3">4x</p>
              <img
                className="position-absolute green_arrow_set"
                src={GreenArrow}
                alt="GreenArrow"
              />
            </div>
          </div>
          <Row className="py-5 position-relative mt-5">
            <div className="">
              <div className="iner_circel_dashed position-absolute"></div>
              <div className="under_circel_dashed position-absolute d-flex justify-content-center align-items-center">
                <p className="ff_inter fw-bold fs-50 mb-0 clr_lite_green opacity-50">
                  V
                </p>
                <p className="ff_inter fw-bold fs-50 mb-0 clr_lite_green pt-4 opacity-50">
                  S
                </p>
              </div>
            </div>
            <Col lg={6}>
              <div className="bg_clr_lite_gray_2 text-center rounded-4 mb-5 mb-lg-0 after_layer position-relative">
                <h2 className="ff_inter fw-bold fs-lg clr_lite_green py-4 ">
                  PRE-AUTOMATION
                </h2>
              </div>
            </Col>
            <Col lg={6} className="mt-5 pt-5 mt-lg-0 pt-lg-0">
              <div className="bg_yellow_dark_clr text-center rounded-4 mt-5 mt-lg-0 after_layer_2 position-relative">
                <h2 className="ff_inter fw-bold fs-lg text-white py-4 ">
                  POST-AUTOMATION
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col lg={6}>
              <div className="text-center">
                <img
                  className=" w-100 custom_width_img"
                  src={ManStudyImg}
                  alt="ManStudyImg"
                />
                <p className="ff_inter fw-bold fs-xl text-warning  pt-5">
                  With 100% manual process
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-center mt-5 pt-5 mt-lg-0 pt-lg-0">
                <img
                  className=" w-100 custom_width_img"
                  src={GirlWorkLaptop}
                  alt="ManStudyImg"
                />
                <p className="ff_inter fw-bold fs-xl text-warning  pt-5">
                  With 100% manual process
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default IncreasingProcess;
