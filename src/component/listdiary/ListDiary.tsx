import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./ListDiary.module.scss";
import classNames from "classnames/bind";
import FilterLevel from "../filter/filterlevel/FilterLevel";
import TableReport from "../table/tablereport/TableReport";
import Search from "antd/es/input/Search";

const cx = classNames.bind(styles);

const ListDiary = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <div className={cx("filter")}>
          <div>
            <h6>Chọn thời gian</h6>
            <input
              type="date"
              className={cx("dateFrom")}
              style={{ width: "20vh" }}
            />
            <input type="date" style={{ width: "20vh" }} />
          </div>
          <div>
            <h6>Từ khoá</h6>
            <Search />
          </div>
        </div>
        <TableReport />
      </div>
    </Container>
  );
};

export default ListDiary;
