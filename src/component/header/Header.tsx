import React from "react";

import { MailOutlined, BellOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Avatar from "antd/es/avatar";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useLocation } from "react-router-dom";
const cx = classNames.bind(styles);

const { Search } = Input;
const Header = () => {
  const location = useLocation();
  let query = new URLSearchParams(location.search);
  const name = query.get("name");
  const list = query.get("list");
  const model = query.get("model");

  return (
    <Container fluid className={cx("wrap-header")}>
      <Row>
        <Col lg={2}>
          <div className={cx("header_right")}>
            {name ? (
              <h6 className={cx(`${list ? "active" : "noactive"}`)}>{name}</h6>
            ) : null}
            {list ? (
              <h5
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                &gt;
              </h5>
            ) : null}
            {list ? (
              <h6 className={cx(`${model ? "active" : "noactive"}`)}>{list}</h6>
            ) : null}
            {model ? (
              <h5
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                &gt;
              </h5>
            ) : null}
            {model ? (
              <h6 className={cx(`${model ? "noactive" : "active"}`)}>
                {model}
              </h6>
            ) : null}
          </div>
        </Col>
        <Col lg={10} className={cx("header-right")}>
          <BellOutlined
            style={{ fontSize: 24, color: "rgba(255, 172, 106, 1)" }}
          />
          <div className={cx("header-avatar")}>
            <Avatar
              src={require("../../assent/avatar.png")}
              style={{ fontSize: 24, marginRight: 8 }}
            />
            <div className={cx("header-avatar_content")}>
              <p style={{ margin: 0, color: "rgba(126, 125, 136, 1)" }}>
                Xin chào
              </p>
              <h6 style={{ margin: 0 }}>Trần Hoàng Long</h6>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
