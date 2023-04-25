import React from "react";
import styles from "./ListService.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FilterDevice from "../filter/filterdivice/FilterDevice";
import TableDevice from "../table/tabledevice/TableDevice";
import { useNavigate } from "react-router-dom";
import TableService from "../table/tabledevice/TableDevice";
import FilterService from "../filter/filterservice/FilterDevice";

const cx = classnames.bind(styles);

const ListService = () => {
  const navigate = useNavigate();
  const handleChangPageAdd = () => {
    navigate(
      "/serviceadd?name=Dịch vụ&list=Danh sách dịch vụ&model=Thêm dịch vụ"
    );
  };
  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <h4 className={cx("title")}>Quản lý dịch vụ</h4>
        <FilterService />
        <TableService />
        <div className={cx("wrapAdd")} onClick={handleChangPageAdd}>
          <img
            src={require("../../assent/add-square.png")}
            style={{ width: "50%" }}
          />
          <h6 className={cx("btnThem")}>Thêm Dịch vụ</h6>
        </div>
      </div>
    </Container>
  );
};

export default ListService;
