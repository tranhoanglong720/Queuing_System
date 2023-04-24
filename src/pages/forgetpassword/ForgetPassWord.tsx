import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Col, Input, Row, Typography } from "antd";
import IMAGE_ACCOUNT_PAGE from "../../assent/forgetpassword.png";
import styles from "../login/Login.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const { Text, Title } = Typography;

const ForgetPassWord = () => {
  const navigate = useNavigate();
  const handleConfirm = () => {
    navigate("/inforperson?name=Thông tin cá nhân");
  };
  return (
    <div className={cx("account-common-page")}>
      <div className={cx("account-wrapper")}>
        <div className={cx("account_left")}>
          <img src={IMAGE_ACCOUNT_PAGE} alt="zelo_login" />
        </div>
        <div className={cx("account_right")}>
          <div className={cx("logo")}>
            <img
              src={require("../../assent/Logo_alta.png")}
              style={{ width: "30%" }}
            />
          </div>
          <Title level={2} style={{ textAlign: "center" }}>
            <Text>Đặt lại mật khẩu mới</Text>
          </Title>
          <div className={cx("form-account")}>
            <Row gutter={[0, 8]}>
              <Col span={18}>
                <Input.Password
                  type="password"
                  name="password"
                  placeholder="Password"
                  maxLength={200}
                />
              </Col>
              <Col span={18}>
                <Input.Password
                  type="password"
                  name="password"
                  placeholder="Password"
                  maxLength={200}
                />
              </Col>
              <Col span={18}>
                <br />
                <Button
                  className={cx("btnLogin")}
                  htmlType="submit"
                  block
                  onClick={handleConfirm}
                >
                  Xác nhận
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassWord;
