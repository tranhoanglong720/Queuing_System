import React from "react";
import styles from "./TableDevice.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
const cx = classnames.bind(styles);

const TableDevice = () => {
  const navigate = useNavigate();
  const handleChangeDetail = () => {
    navigate(
      "/devicedetail?name=Thiết bị&list=Danh sách thiết bị&model=Chi tiết thiết bị"
    );
  };
  const handleChangeUpdate = () => {
    navigate(
      "/deviceeupdate?name=Thiết bị&list=Danh sách thiết bị&model=Chi tiết thiết bị"
    );
  };
  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <Table striped bordered variant="white">
          <thead className={cx("wrap_Table")}>
            <tr>
              <th>Mã dịch vụ</th>
              <th>Tên dịch vụ</th>
              <th>Mô tả</th>
              <th>Trạng thái hoạt động</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className={cx("wrap_Table_body")}>
            <tr>
              <td>KIO_01</td>
              <td>Kiosk</td>
              <td>Mô tả dịch vụ 2</td>
              <td>
                <div>
                  <img
                    src={require("../../../assent/do.png")}
                    style={{ marginBottom: 5, marginRight: 2 }}
                  />
                  Ngưng hoạt động
                </div>
              </td>
              <td>Chi tiết</td>
              <td>Cập nhật</td>
            </tr>
            <tr>
              <td>KIO_01</td>
              <td>Kiosk</td>
              <td>Mô tả dịch vụ 1</td>
              <td>
                <div>
                  <img
                    src={require("../../../assent/xanh.png")}
                    style={{ marginBottom: 5, marginRight: 2 }}
                  />
                  Hoạt động
                </div>
              </td>
              <td onClick={handleChangeDetail} className={cx("txtDetail")}>
                <a>Chi tiết</a>
              </td>
              <td>
                <a>Cập nhật</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TableDevice;