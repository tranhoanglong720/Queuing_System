import React from "react";
import Header from "../../component/header/Header";
import Menubar from "../../component/menubar/MenuBar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import styles from "./InforPerSon.module.scss";
import classnames from "classnames/bind";
import Info from "../../component/info/Info";

const cx = classnames.bind(styles);
const InForPerSon = () => {
  return (
    <Container fluid className={cx("wrap_ListTicket")}>
      <Row>
        <Col lg={2}>
          <Menubar />
        </Col>
        <Col lg={10}>
          <Header />
          <div className={cx("wrap_info")}>
            <Info />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InForPerSon;
