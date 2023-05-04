import React from "react";
import styles from "./TableRole.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
const cx = classnames.bind(styles);

const TableRole = () => {
  const navigate = useNavigate();
  const handleChangeDetail = () => {
    navigate(
      "/leveldetail?name=Cấp số&list=Danh sách cấp số&model=Chi tiết cấp số"
    );
  };

  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <Table striped bordered variant="white">
          <thead className={cx("wrap_Table")}>
            <tr>
              <th>Tên vai trò</th>
              <th>Số người dùng</th>
              <th>Mô tả</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={cx("wrap_Table_body")}>
            <tr>
              <td>Kế toán</td>
              <td>6</td>
              <td>
                Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu
              </td>
              <td>Cập nhật</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TableRole;
