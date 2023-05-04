import React from "react";
import styles from "./TableService.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
const cx = classnames.bind(styles);

const TableService = () => {
  const navigate = useNavigate();
  const handleChangeDetail = () => {
    navigate(
      "/servicedetail?name=Dịch vụ&list=Danh sách dịch vụ&model=Chi tiết dịch vụ"
    );
  };
  const handleChangeUpdate = () => {
    navigate(
      "/serviceupdate?name=Dịch vụ&list=Danh sách dịch vụ&model=Cập nhật dịch vụ"
    );
  };
  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <Table striped bordered variant="white">
          <thead className={cx("wrap_Table")}>
            <tr>
              <th>Mã thiết bị</th>
              <th>Tên thiết bị</th>
              <th>Địa chỉ IP</th>
              <th>Trạng thái hoạt động</th>
              <th>Trạng thái kết nối</th>
              <th>Dịch vụ</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className={cx("wrap_Table_body")}>
            <tr>
              <td>KIO_01</td>
              <td>Kiosk</td>
              <td>192.168.1.10</td>
              <td>
                <div>
                  <img
                    src={require("../../../assent/do.png")}
                    style={{ marginBottom: 5, marginRight: 2 }}
                  />
                  Ngưng hoạt động
                </div>
              </td>
              <td>
                <div>
                  <img
                    src={require("../../../assent/do.png")}
                    style={{ marginBottom: 5, marginRight: 2 }}
                  />
                  Mất kết nối
                </div>
              </td>
              <td>Khám tim mạch, Khám mắt...</td>
              <td>Chi tiết</td>
              <td>Cập nhật</td>
            </tr>
            <tr>
              <td>KIO_01</td>
              <td>Kiosk</td>
              <td>192.168.1.10</td>
              <td>
                <div>
                  <img
                    src={require("../../../assent/xanh.png")}
                    style={{ marginBottom: 5, marginRight: 2 }}
                  />
                  Hoạt động
                </div>
              </td>
              <td>
                <div>
                  {" "}
                  <img
                    src={require("../../../assent/xanh.png")}
                    style={{ marginBottom: 5, marginRight: 2 }}
                  />
                  Kết nối
                </div>
              </td>
              <td>Khám tim mạch, Khám mắt...</td>
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

export default TableService;
