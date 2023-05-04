import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./ListLevel.module.scss";
import classNames from "classnames/bind";
import FilterLevel from "../filter/filterlevel/FilterLevel";
import TableLevel from "../table/tablelevel/TableLevel";

const cx = classNames.bind(styles);

const ListLevel = () => {
  const navigate = useNavigate();
  const handleChangPageAdd = () => {
    navigate("/leveladd?name=Cấp số&list=Danh sách cấp số&model=Cấp số mới");
  };
  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <h4 className={cx("title")}>Danh sách thiết bị</h4>
        <FilterLevel />
        <TableLevel />
        <div className={cx("wrapAdd")} onClick={handleChangPageAdd}>
          <img
            src={require("../../assent/add-square.png")}
            style={{ width: "50%" }}
          />
          <h6 className={cx("btnThem")}>Cấp số mới</h6>
        </div>
      </div>
    </Container>
  );
};

export default ListLevel;
