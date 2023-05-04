import React from "react";
import styles from "./Service.module.scss";
import classNames from "classnames/bind";
import Header from "../../component/header/Header";
import Menubar from "../../component/menubar/MenuBar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FormAddService from "../../component/form/formaddservice/FormAddService";
import FormDetailService from "../../component/form/formdetailservice/FormDetailService";

const cx = classNames.bind(styles);
const ServiceDetail = () => {
  return (
    <Container fluid className={cx("wrap_divce")}>
      <Row>
        <Col lg={2}>
          <Menubar />
        </Col>
        <Col lg={10}>
          <Header />
          <h5 className={cx("addtxt")}>Quản lý dịch vụ</h5>
          <FormDetailService />
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetail;
