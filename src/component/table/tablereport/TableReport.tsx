import React from "react";
import styles from "./TableReport.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
const cx = classnames.bind(styles);

const TableReport = () => {
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
              <th>Tên đăng nhập</th>
              <th>Thời gian tác động</th>
              <th>IP thực hiện</th>
              <th>Thao tác thực hiện</th>
            </tr>
          </thead>
          <tbody className={cx("wrap_Table_body")}>
            <tr>
              <td>tuyetnguyen@12</td>
              <td>01/12/2021 15:12:17</td>
              <td>192.168.3.1</td>
              <td>Cập nhật thông tin dịch vụ DV_01</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TableReport;
