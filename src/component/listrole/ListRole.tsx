import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./ListRole.module.scss";
import classNames from "classnames/bind";
import Search from "antd/es/input/Search";
import TableRole from "../table/tablerole/TableRole";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../reudux/hook";
import { ListRoleFind } from "../reudux/selector";
import { getListRole } from "../reudux/slices/RoleSlices";
import { AppContext } from "../context/AppProvider";
const cx = classNames.bind(styles);

const ListRole = () => {
  const navigate = useNavigate();

  const handleChangePageAddRule = () => {
    navigate(
      "/managerruleadd?name=Vai Trò&list=Quản lý vai trò&model=Thêm vai trò"
    );
  };
  const dispatch = useAppDispatch();
  const ListRoles = useSelector(ListRoleFind);
  // const [listUser, setListUser] = useState([]);
  console.log(ListRoles);
  useEffect(() => {
    dispatch(getListRole());
    // setListUser(ListUser);
  }, []);

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
        <TableRole data={ListRoles} />
        <div className={cx("wrapAdd")} onClick={handleChangePageAddRule}>
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
