import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./ListRole.module.scss";
import classNames from "classnames/bind";
import Search from "antd/es/input/Search";
import TableRole from "../table/tablerole/TableRole";

const cx = classNames.bind(styles);

const ListRole = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <h4 className={cx("title")}>Danh sách vai trò</h4>
        <div className={cx("filter")}>
          <div>
            <h6>Từ khoá</h6>
            <Search />
          </div>
        </div>
        <TableRole />
        <div className={cx("wrapAdd")}>
          <img
            src={require("../../assent/add-square.png")}
            style={{ width: "50%" }}
          />
          <h6 className={cx("btnThem")}>Thêm vai trò</h6>
        </div>
      </div>
    </Container>
  );
};

export default ListRole;
