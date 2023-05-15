import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Col, Input, Row, Typography } from "antd";
import IMAGE_ACCOUNT_PAGE from "../../assent/login.png";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
// import { auth } from "../../component/fireBase/FireBase";
const cx = classNames.bind(styles);

const { Text, Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/inforperson");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
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
            <Text style={{ color: "#4d93ff" }}>Sign In</Text>
          </Title>
          <div className={cx("form-account")}>
            <Row gutter={[0, 8]}>
              <Col span={18}>
                <Input
                  type="text"
                  name="username"
                  placeholder="Email"
                  maxLength={50}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col span={18}>
                <Input.Password
                  type="password"
                  name="password"
                  placeholder="Password"
                  maxLength={200}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <Col span={18}>
                <br />
                <Button className={cx("btnLogin")} block onClick={handleLogin}>
                  Đăng nhập
                </Button>
              </Col>
            </Row>
          </div>

          <div className={cx("addtional-link")}>
            <Link to="/forgetpasswordcheck" style={{ color: "red" }}>
              Quên mật khẩu?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
