import React from "react";
import styles from "./ManagerRuleAdd.module.scss";
import classNames from "classnames/bind";
import Header from "../../component/header/Header";
import Menubar from "../../component/menubar/MenuBar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import FormUpdateAccount from "../../component/form/formupdateaccount/FormUpdateAccount";

const cx = classNames.bind(styles);
const ManagerAcountUpdate = () => {
  return (
    <Container fluid className={cx("wrap_divce")}>
      <Row>
        <Col lg={2}>
          <Menubar />
        </Col>
        <Col lg={10}>
          <Header />
          <h5 className={cx("addtxt")}>Quản lý Tài khoản</h5>
          <FormUpdateAccount />
        </Col>
      </Row>
    </Container>
  );
};

export default ManagerAcountUpdate;
