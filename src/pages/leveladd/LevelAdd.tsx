import React from "react";
import styles from "./Level.module.scss";
import classNames from "classnames/bind";
import { Container, Col, Row } from "react-bootstrap";
import Menubar from "../../component/menubar/MenuBar";
import Header from "../../component/header/Header";
import FormAddLevel from "../../component/form/formaddlevel/FormAddLevel";

const cx = classNames.bind(styles);

const LevelAdd = () => {
  return (
    <Container fluid className={cx("wrap_divce")}>
      <Row>
        <Col lg={2}>
          <Menubar />
        </Col>
        <Col lg={10}>
          <Header />
          <h5 className={cx("addtxt")}>Quản lý cấp số</h5>
          <FormAddLevel />
        </Col>
      </Row>
    </Container>
  );
};

export default LevelAdd;
