import React from "react";
import styles from "./InFo.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

const Info = () => {
  const User = useSelector((state: any) => state.AcountSilces.User);
  return (
    <div className={cx("wrapInfo")}>
      <Container>
        <Row className={cx("row_Info")}>
          <Col lg={3}>
            <img src={require("../../assent/imginfo.png")} />
            <h4 style={{ textAlign: "center", marginRight: 30 }}>
              {User.name}
            </h4>
          </Col>
          <Col lg={4}>
            <div className={cx("detail")}>
              <p style={{ fontWeight: 600 }}>Tên người dùng</p>
              <div className={cx("inputCus")}>
                <p className={cx("inputCus_txt")}>{User.name}</p>
              </div>
            </div>
            <div className={cx("detail")}>
              <p style={{ fontWeight: 600 }}>Số điện thoại </p>
              <div className={cx("inputCus")}>
                <p className={cx("inputCus_txt")}>{User.phone}</p>
              </div>
            </div>
            <div className={cx("detail")}>
              <p style={{ fontWeight: 600 }}>Email:</p>
              <div className={cx("inputCus")}>
                <p className={cx("inputCus_txt")}>{User.email}</p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={cx("detail")}>
              <p style={{ fontWeight: 600 }}>Tên đăng nhập </p>
              <div className={cx("inputCus")}>
                <p className={cx("inputCus_txt")}>{User.account}</p>
              </div>
            </div>
            <div className={cx("detail")}>
              <p style={{ fontWeight: 600 }}>Mật khẩu</p>
              <div className={cx("inputCus")}>
                <p className={cx("inputCus_txt")}>{User.password}</p>
              </div>
            </div>
            <div className={cx("detail")}>
              <p style={{ fontWeight: 600 }}>Vai trò:</p>
              <div className={cx("inputCus")}>
                <p className={cx("inputCus_txt")}>{User.role}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
