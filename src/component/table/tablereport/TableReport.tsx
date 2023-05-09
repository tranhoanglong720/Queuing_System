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
              <th>Số thứ tự</th>
              <th>Tên dịch vụ</th>
              <th>Thời gian cấp</th>
              <th>Tình trạng</th>
              <th>Nguồn cấp</th>
            </tr>
          </thead>
          <tbody className={cx("wrap_Table_body")}>
            <tr>
              <td>2010001</td>
              <td>Khám tim mạch</td>
              <td>07:20 - 07/10/2021</td>
              <td>
                <div>
                  {" "}
                  <img
                    src={require("../../../assent/xanh.png")}
                    style={{ marginBottom: 5, marginRight: 2 }}
                  />
                  Đang chờ
                </div>
              </td>
              <td>Kiosk</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TableReport;
