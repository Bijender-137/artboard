import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftArrowGRoup from "../assets/img/png/left_arrow_group.png";
import RightArrowGRoup from "../assets/img/png/right_arrow_group.png";
import Clock from "../assets/img/svg/clock_icon.svg";
import LeftArrow2 from "../assets/img/svg/left_arrow_2.svg";
import Invoice from "../assets/img/svg/invoice_img.svg";
import Effort from "../assets/img/svg/effort_img.svg";
import BlackBAll from "../assets/img/svg/black_ball.svg";
import YellowCross from "../assets/img/svg/yellow_cross.svg";
const Duration = () => {
  return (
    <>
      <section className="py-5 position-relative">
        <div className="footer_dashed_line position-absolute"></div>

        <Container className="pb-5">
          <div className=" d-flex align-items-center justify-content-around">
            <div className="gray_underline"></div>
            <div className="gray_underline"></div>
          </div>
          <div className="bg_clr_dark_blue d-flex flex-column flex-lg-row align-items-center justify-content-evenly mt-5 rounded-4 py-3">
            <div className="position-relative">
              <div className=" d-flex align-items-baseline">
                <h2 className="ff_inter fw-bold fs-118 text-white">8</h2>
                <div className="divider_line"></div>
                <p className="ff_inter fw-bold fs-3xl text-white months">
                  MONTHS
                </p>
              </div>
            </div>
            <div className="mt-5 mt-lg-0">
              <div className="d-flex align-items-center">
                <img src={LeftArrowGRoup} alt="LeftArrowGRoup" />
                <div className="px-3 px-sm-5 text-center">
                  <p className="ff_inter fw-bold fs-2xl text-white ">
                    Duration
                  </p>
                  <img src={Clock} alt="Clock" />
                </div>
                <img src={RightArrowGRoup} alt="RightArrowGRoup" />
              </div>
            </div>
            <div className="position-relative mt-5 mt-lg-0">
              <div className=" d-flex align-items-baseline">
                <h2 className="ff_inter fw-bold fs-118 text-white">4</h2>
                <div className="months_4"></div>
                <p className="ff_inter fw-bold fs-3xl text-white months">
                  MONTHS <br /> REMAINING
                </p>
              </div>
            </div>
          </div>
          <div className=" d-flex flex-column flex-lg-row align-items-center justify-content-evenly mt-5  invoice_box rounded-4 py-5 position-relative">
            <img className="position-absolute footer_ball" src={BlackBAll} alt="BlackBAll" />
            <img className="position-absolute cross_footer" src={YellowCross} alt="YellowCross" />
            <div className="">
              <div className=" ">
                <h2 className="ff_inter fw-bold fs-45 clr_dark_blue">42K</h2>
              </div>
            </div>
            <div className="mt-5 mt-lg-0">
              <div className="d-flex align-items-center">
                <img src={LeftArrow2} alt="LeftArrowGRoup" />
                <div className="px-3 px-sm-5 text-center">
                  <p className="ff_inter fw-bold fs-2xl clr_dark_blue ">
                    Invoices
                  </p>
                  <img src={Invoice} alt="Invoice" />
                </div>
                <img src={RightArrowGRoup} alt="RightArrowGRoup" />
              </div>
            </div>
            <div className="position-relative mt-5 mt-lg-0">
              <div className=" d-flex align-items-baseline">
                <h2 className="ff_inter fw-bold fs-45 clr_dark_blue">21K </h2>
              </div>
            </div>
          </div>
          <div className="bg_clr_dark_blue d-flex flex-column flex-lg-row align-items-center justify-content-evenly mt-5 rounded-4 py-5">
            <div>
              <h2 className="ff_inter fw-bold fs-60 text-white">95</h2>
              <p className="ff_inter fw-bold fs-xsm text-white months">
                MAN DAYS
              </p>
            </div>
            <div className="mt-5 mt-lg-0">
              <div className="d-flex align-items-center">
                <img src={LeftArrowGRoup} alt="LeftArrowGRoup" />
                <div className="px-3 px-sm-5 text-center">
                  <p className="ff_inter fw-bold fs-2xl text-white ">Effort</p>
                  <img src={Effort} alt="Effort" />
                </div>
                <img src={RightArrowGRoup} alt="RightArrowGRoup" />
              </div>
            </div>
            <div className="position-relative mt-5 mt-lg-0">
              <div>
                <h2 className="ff_inter fw-bold fs-60 text-white">14.25</h2>

                <p className="ff_inter fw-bold fs-xsm text-white months">
                  MAN DAYS
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Duration;
