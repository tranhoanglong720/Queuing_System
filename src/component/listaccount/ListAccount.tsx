import React, { useEffect, useState } from "react";
import styles from "./ListAccount.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FilterDevice from "../filter/filterdivice/FilterDevice";
import TableDevice from "../table/tabledevice/TableDevice";
import { useNavigate } from "react-router-dom";
import FilterAccount from "../filter/filteraccount/FilterAccount";
import TableAccount from "../table/tableaccount/TableAccount";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../reudux/slices/AccountSlices";
import { useAppDispatch } from "../reudux/hook";
import { ListUserAcount } from "../reudux/selector";

const cx = classnames.bind(styles);

const ListAccount = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleChangPageAdd = () => {
    navigate(
      "/manageraccountadd?name=Cài đặt hệ thống&list=Quản lý tài khoản&model=Thêm tài khoản"
    );
  };
  const ListUser = useSelector(ListUserAcount);
  // const [listUser, setListUser] = useState([]);
  // console.log(ListUser);
  useEffect(() => {
    dispatch(getListUser());
    // setListUser(ListUser);
  }, []);
  // console.log(ListUser);
  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <h4 className={cx("title")}>Danh sách tài khoản</h4>
        <FilterAccount />
        <TableAccount data={ListUser} />
        <div className={cx("wrapAdd")} onClick={handleChangPageAdd}>
          <img
            src={require("../../assent/add-square.png")}
            style={{ width: "50%" }}
          />
          <h6 className={cx("btnThem")}>Thêm tài khoản</h6>
        </div>
      </div>
    </Container>
  );
};

export default ListAccount;
