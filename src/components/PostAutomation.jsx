import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlueBox from "../assets/img/svg/blue_box_1.svg";
import YellowCross from "../assets/img/svg/yellow_cross.svg";
import Invoice1 from "../assets/img/png/invoice_1.png";
import Invoice2 from "../assets/img/png/invoice_2.png";
import Invoice3 from "../assets/img/png/invoice_3.png";
import Invoice4 from "../assets/img/png/invoice_4.png";
import SideShadow from "../assets/img/png/side_shadow.png";
import SideShadow2 from "../assets/img/png/side_shadow_2.png";
import SideShadow3 from "../assets/img/png/side_shadow_3.png";
import SideShadow4 from "../assets/img/png/side_shadow_4.png";
import SideShadow5 from "../assets/img/png/side_shadow_5.png";
import YellowArrow from "../assets/img/svg/yellow_arrow_right.svg";
import Football from "../assets/img/png/footbal_right.png";
const PostAutomation = () => {
  return (
    <>
      <section className="py-5 position-relative mt-5 overflow-hidden">
        <img
          className="position-absolute post_auto_footbal"
          src={Football}
          alt="Football"
        />
        <img className="position-absolute yellow_btn_1" src={YellowCross} alt="YellowCross" />
        <img className="position-absolute yellow_btn_2" src={YellowCross} alt="YellowCross" />
        <div className="bg_clr_cards_lite position-absolute d-none d-lg-block"></div>
        <div className="bg_clr_cards_lite_2 position-absolute d-none d-lg-block"></div>
        <Container>
          <div className="text-center">
            <h2 className="ff_inter fw-bold fs_50 clr_dark_blue">
              Post-Automation
            </h2>
            <p className="ff_inter fw-bold fs-md mt-4">
              End-to-end automation{" "}
              <span className="fw-normal">on the Yardi platform</span>
            </p>
          </div>
          <Row className="py-sm-5 mt-sm-5 justify-content-center">
            <Col sm={6} lg={4} className="mt-5">
              <div className="position-relative p-sm-5 h-100 text-center text-sm-start  ">
                <img
                  className="position-absolute sidebaar d-none d-sm-block z-index-n1"
                  src={SideShadow}
                  alt="SideShadow"
                />
                <div className="ps-md-5 ms-sm-5 z-index-2 ">
                  <img className=" pt-sm-5" src={Invoice1} alt="Invoice1" />
                  <p className="ff_inter fw-medium fs_sm mt-3">
                    automatically System picks up invoices <br />{" "}
                    <span className="text-warning">automatically</span>
                  </p>
                  <img
                    className="position-absolute YellowArrow_set d-none d-sm-block"
                    src={YellowArrow}
                    alt="YellowArrow"
                  />
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} className="mt-sm-5">
              <div className="position-relative p-sm-5 h-100  text-center text-sm-start  ">
                <img
                  className="position-absolute sidebaar d-none d-sm-block"
                  src={SideShadow2}
                  alt="SideShadow"
                />
                <div className="ps-md-5 ms-sm-5 ">
                  <img className=" pt-5" src={Invoice2} alt="Invoice1" />
                  <p className="ff_inter fw-medium fs_sm mt-3">
                    Validating businessrules,{" "}
                    <span className="text-warning">coding</span>, and{" "}
                    <span className="text-warning">handling exceptions</span>
                  </p>
                  <img
                    className="position-absolute YellowArrow_set d-none d-sm-block"
                    src={YellowArrow}
                    alt="YellowArrow"
                  />
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} className="mt-sm-5 pt-sm-5 pt-lg-0">
              <div className="position-relative p-sm-5 h-100  text-center text-sm-start mt-sm-5 mt-lg-0 ">
                <img
                  className="position-absolute sidebaar d-none d-sm-block"
                  src={SideShadow3}
                  alt="SideShadow"
                />
                <div className="ps-md-5 ms-sm-5 ">
                  <img className="pt-5" src={Invoice3} alt="Invoice1" />
                  <p className="ff_inter fw-medium fs_sm mt-3">
                    <span className="text-warning">Invoice distributionby</span>{" "}
                    gathering contact details
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} className="pt-sm-5 mt-sm-5">
              <div className="position-relative p-sm-5 h-100 mt-sm-5  text-center text-sm-start ">
                <img
                  className="position-absolute sidebaar d-none d-sm-block"
                  src={SideShadow4}
                  alt="SideShadow"
                />
                <div className="ps-md-5 ms-sm-5 ">
                  <img className="ms -5 pt-5" src={Invoice4} alt="Invoice1" />
                  <p className="ff_inter fw-medium fs_sm mt-3">
                    <span className="text-warning">Sending emails</span> with
                    attachments with invoices to the recipients.
                  </p>
                </div>
                <img
                  className="position-absolute YellowArrow_set d-none d-sm-block"
                  src={YellowArrow}
                  alt="YellowArrow"
                />
              </div>
            </Col>
            <Col sm={6} lg={4} className="pt-sm-5 mt-sm-5">
              <div className="position-relative p-sm-5 h-100 mt-sm-5 text-center text-sm-start">
                <img
                  className="position-absolute sidebaar d-none d-sm-block"
                  src={SideShadow5}
                  alt="SideShadow"
                />
                <div className="ps-md-5 ms-sm-5 ">
                  <img className=" pt-5" src={Invoice3} alt="Invoice1" />
                  <p className="ff_inter fw-medium fs_sm mt-3">
                    Finance receives system-generated{" "}
                    <span className="text-warning">automated summaries</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PostAutomation;
