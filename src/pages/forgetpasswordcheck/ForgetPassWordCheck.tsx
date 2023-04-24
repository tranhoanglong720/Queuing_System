import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Col, Input, Row, Typography } from "antd";
import IMAGE_ACCOUNT_PAGE from "../../assent/forgetpassword.png";
import styles from "../login/Login.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const { Text, Title } = Typography;

const ForgetPassWordCheck = () => {
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
            <Text>Đặt lại mật khẩu</Text>
          </Title>
          <div style={{ textAlign: "center" }}>
            Vui lòng nhập email để đặt lại mật khẩu của bạn *
          </div>
          <div className={cx("form-account")}>
            <Row gutter={[0, 8]}>
              <Col span={18}>
                <Input
                  type="text"
                  name="username"
                  placeholder="Email"
                  maxLength={50}
                />
              </Col>

              <Col span={18}>
                <div className={cx("forgetpassword")}>
                  <Button className={cx("btnCancel")} htmlType="submit" block>
                    Hủy
                  </Button>
                  <Button
                    className={cx("btnContinue")}
                    type="primary"
                    htmlType="submit"
                    block
                  >
                    <Link
                      to="/forgetpassword"
                      style={{ textDecoration: "none" }}
                    >
                      Tiếp tục
                    </Link>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassWordCheck;
