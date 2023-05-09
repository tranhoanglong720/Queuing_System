import React from "react";
import styles from "./ManagerRuleAdd.module.scss";
import classNames from "classnames/bind";
import Header from "../../component/header/Header";
import Menubar from "../../component/menubar/MenuBar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import FormAddAccount from "../../component/form/formaddaccount/FormAddAccount";

const cx = classNames.bind(styles);
const ManagerAcountAdd = () => {
  return (
    <Container fluid className={cx("wrap_divce")}>
      <Row>
        <Col lg={2}>
          <Menubar />
        </Col>
        <Col lg={10}>
          <Header />
          <h5 className={cx("addtxt")}>Quản lý Tài khoản</h5>
          <FormAddAccount />
        </Col>
      </Row>
    </Container>
  );
};

export default ManagerAcountAdd;
