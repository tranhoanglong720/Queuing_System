import React from "react";
import styles from "./InFo.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const cx = classNames.bind(styles);

const Info = () => {
  return (
    <div className={cx("wrapInfo")}>
      <Container>
        <Row className={cx("row_Info")}>
          <Col lg={3}>
            <img src={require("../../assent/imginfo.png")} />
            <h4 style={{ textAlign: "center", marginRight: 30 }}>
              Trần Hoàng Long
            </h4>
          </Col>
          <Col lg={4}>
            <div className={cx("detail")}>
              <p style={{ fontWeight: 600 }}>Tên người dùng</p>
              <div className={cx("inputCus")}>
                <p className={cx("inputCus_txt")}>Trần Hoàng Long</p>
              </div>
            </div>
            <div className={cx("detail")}>
              <p style={{ fontWeight: 600 }}>Số điện thoại </p>
              <div className={cx("inputCus")}>
                <p className={cx("inputCus_txt")}>0767375921</p>
              </div>
            </div>
            <div className={cx("detail")}>
              <p style={{ fontWeight: 600 }}>Email:</p>
              <div className={cx("inputCus")}>
                <p className={cx("inputCus_txt")}>adminSSO1@domain.com</p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={cx("detail")}>
              <p style={{ fontWeight: 600 }}>Tên đăng nhập </p>
              <div className={cx("inputCus")}>
                <p className={cx("inputCus_txt")}>lequynhaivan01</p>
              </div>
            </div>
            <div className={cx("detail")}>
              <p style={{ fontWeight: 600 }}>Mật khẩu</p>
              <div className={cx("inputCus")}>
                <p className={cx("inputCus_txt")}>311940211</p>
              </div>
            </div>
            <div className={cx("detail")}>
              <p style={{ fontWeight: 600 }}>Vai trò:</p>
              <div className={cx("inputCus")}>
                <p className={cx("inputCus_txt")}>Kế toán</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
