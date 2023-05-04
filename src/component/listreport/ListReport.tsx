import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./ListReport.module.scss";
import classNames from "classnames/bind";
import FilterLevel from "../filter/filterlevel/FilterLevel";
import TableReport from "../table/tablereport/TableReport";

const cx = classNames.bind(styles);

const ListReport = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <div>
          <h6>Chọn thời gian</h6>
          <input
            type="date"
            className={cx("dateFrom")}
            style={{ width: "20vh" }}
          />
          <input type="date" style={{ width: "20vh" }} />
        </div>
        <TableReport />
        <div className={cx("wrapAdd")}>
          <img
            src={require("../../assent/add-square.png")}
            style={{ width: "50%" }}
          />
          <h6 className={cx("btnThem")}>Tải về</h6>
        </div>
      </div>
    </Container>
  );
};

export default ListReport;
