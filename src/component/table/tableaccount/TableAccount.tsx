import React, { useContext } from "react";
import styles from "./TableDevice.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { User } from "../../../type";
import { AppContext } from "../../context/AppProvider";
import { useAppDispatch } from "../../reudux/hook";
import { getUser } from "../../reudux/slices/AccountSlices";
import { useDispatch } from "react-redux";
const cx = classnames.bind(styles);

type Props = { data: User[] };
const TableAccount = (props: Props) => {
  const navigate = useNavigate();

  const { setUserUpdate } = useContext(AppContext);
  const dispatch = useAppDispatch();
  // const dispatch=useDispatch();
  const handleChangeUpdate = (uid: string) => {
    setUserUpdate(uid);
    dispatch(getUser(uid));
    setTimeout(() => {
      navigate(
        "/manageraccountupdate?name=Cài đặt hệ thống&list=Quản lý tài khoản&model=Cập nhật tài khoản"
      );
    }, 1000);
  };

  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <Table striped bordered variant="white">
          <thead className={cx("wrap_Table")}>
            <tr>
              <th>Tên đăng nhập</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Trạng thái hoạt động</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={cx("wrap_Table_body")}>
            {props.data?.map((item: User, index) => (
              <tr key={item.id}>
                <td>{item.account}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                {item.state === "Hoạt động" ? (
                  <td>
                    <div>
                      <img
                        src={require("../../../assent/xanh.png")}
                        style={{ marginBottom: 5, marginRight: 2 }}
                      />
                      Hoạt động
                    </div>
                  </td>
                ) : (
                  <td>
                    <div>
                      <img
                        src={require("../../../assent/do.png")}
                        style={{ marginBottom: 5, marginRight: 2 }}
                      />
                      Ngưng hoạt động
                    </div>
                  </td>
                )}
                <td
                  onClick={() => handleChangeUpdate(item.id)}
                  className={cx("txtDetail")}
                >
                  <a>Cập nhật</a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TableAccount;
