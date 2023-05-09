import React from "react";
import styles from "./TableDevice.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
const cx = classnames.bind(styles);

const TableAccount = () => {
  const navigate = useNavigate();

  const handleChangeUpdate = () => {
    navigate(
      "/manageraccountupdate?name=Cài đặt hệ thống&list=Quản lý tài khoản&model=Cập nhật tài khoản"
    );
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
            <tr>
              <td>tuyetnguyen@12</td>
              <td>Nguyen Văn A</td>
              <td>0919256712</td>
              <td>tuyetnguyen123@gmail.com</td>
              <td>Kế toán</td>
              <td>
                <div>
                  <img
                    src={require("../../../assent/xanh.png")}
                    style={{ marginBottom: 5, marginRight: 2 }}
                  />
                  Hoạt động
                </div>
              </td>
              <td onClick={handleChangeUpdate} className={cx("txtDetail")}>
                <a>Cập nhật</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TableAccount;
