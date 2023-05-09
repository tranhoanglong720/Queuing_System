import React from "react";
import styles from "./ManagerAcount.module.scss";
import classNames from "classnames/bind";
import Header from "../../component/header/Header";
import Menubar from "../../component/menubar/MenuBar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ListAccount from "../../component/listaccount/ListAccount";

const cx = classNames.bind(styles);
const ManagerAcount = () => {
  return (
    <Container fluid className={cx("wrap_divce")}>
      <Row>
        <Col lg={2}>
          <Menubar />
        </Col>
        <Col lg={10}>
          <Header />
          <div className={cx("wrap_info")}>
            <ListAccount />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ManagerAcount;
