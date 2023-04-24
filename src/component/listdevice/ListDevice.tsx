import React from "react";
import styles from "./ListDevice.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FilterDevice from "../filter/filterdivice/FilterDevice";
import TableDevice from "../table/tabledevice/TableDevice";

const cx = classnames.bind(styles);

const ListDevice = () => {
  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <h4 className={cx("title")}>Danh sách thiết bị</h4>
        <FilterDevice />
        <TableDevice />
        <div className={cx("wrapAdd")}>
          <img
            src={require("../../assent/add-square.png")}
            style={{ width: "50%" }}
          />
          <h6 className={cx("btnThem")}>Thêm Thiết bị</h6>
        </div>
      </div>
    </Container>
  );
};

export default ListDevice;
