import React from "react";
import styles from "./Device.module.scss";
import classNames from "classnames/bind";
import Header from "../../component/header/Header";
import Menubar from "../../component/menubar/MenuBar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ListDevice from "../../component/listdevice/ListDevice";

const cx = classNames.bind(styles);

const Device = () => {
  return (
    <Container fluid className={cx("wrap_divce")}>
      <Row>
        <Col lg={2}>
          <Menubar />
        </Col>
        <Col lg={10}>
          <Header />
          <ListDevice />
        </Col>
      </Row>
    </Container>
  );
};

export default Device;
