import React from "react";
import styles from "./Dash.module.scss";
import classNames from "classnames/bind";
import Header from "../../component/header/Header";
import Menubar from "../../component/menubar/MenuBar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AreaChart from "../../component/Pie/AreaChart";
import Static from "../../component/static/Static";
import shedule from "../../assent/lichxanh.png";
import sheduleSD from "../../assent/lichxanhla.png";
import pending from "../../assent/phone.png";
import reject from "../../assent/sao.png";
import About from "../../component/about/About";
import AboutDV from "../../component/AboutDv/AboutDV";
import AboutCS from "../../component/AboutCS/AboutCS";

const cx = classNames.bind(styles);
const Dash = () => {
  const Dc = {
    img: shedule,
    name: "Số thứ tự đã cấp",
    quantity: "4.221",
    percent: "32,41%",
  };
  const SD = {
    img: sheduleSD,
    name: "Số thứ tự đã sử dụng",
    quantity: "3.721",
    percent: "32,41%",
  };
  const CSD = {
    img: pending,
    name: "Số thứ tự đang chờ",
    quantity: "468",
    percent: "56,41%",
  };
  const BQ = {
    img: reject,
    name: "Số thứ tự đã bỏ qua",
    quantity: "32",
    percent: "22,41%",
  };
  return (
    <Container fluid className={cx("wrap_divce")}>
      <Row>
        <Col lg={2}>
          <Menubar />
        </Col>
        <Col lg={10}>
          <Header />
          <div className={cx("wrap_info")}>
            <Row>
              <Col lg={9}>
                <h6 className={cx("txtTitle")}>Dashboard</h6>
                <h5 className={cx("txtTitle")}>Biểu đồ cấp số</h5>
                <div className={cx("static")}>
                  <Static data={Dc} />
                  <Static data={SD} />
                  <Static data={CSD} />
                  <Static data={BQ} />
                </div>
                <div className={cx("Chart")}>
                  <h5>Bảng thống kê theo ngày</h5>
                  <h6>Tháng 11/2021</h6>
                  <AreaChart />
                </div>
              </Col>
              <Col lg={3} className={cx("about")}>
                <div>
                  <h3 className={cx("txtTitle")}>Tổng quan</h3>
                  <div className={cx("about_item")}>
                    <About />
                    <AboutDV />
                    <AboutCS />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dash;
