import React from "react";
import styles from "./TableDevice.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { Device } from "../../../type";
import { useAppDispatch } from "../../reudux/hook";
import { getDevice } from "../../reudux/slices/DeviceSlices";
const cx = classnames.bind(styles);
type Props = { data: Device[] };
const TableDevice = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleChangeDetail = (id: string) => {
    dispatch(getDevice(id));
    setTimeout(() => {
      navigate(
        "/devicedetail?name=Thiết bị&list=Danh sách thiết bị&model=Chi tiết thiết bị"
      );
    }, 1000);
  };
  const handleChangeUpdate = (id: string) => {
    dispatch(getDevice(id));
    setTimeout(() => {
      navigate(
        "/deviceeupdate?name=Thiết bị&list=Danh sách thiết bị&model=Chi tiết thiết bị"
      );
    }, 1000);
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
              <th>Dịch vụ sử dụng</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className={cx("wrap_Table_body")}>
            {props.data?.map((item: Device, index) => (
              <tr key={item.id}>
                <td>{item.matb}</td>
                <td>{item.nametb}</td>
                <td>{item.ip}</td>
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
                    <img
                      src={require("../../../assent/xanh.png")}
                      style={{ marginBottom: 5, marginRight: 2 }}
                    />
                    Kết nối
                  </div>
                </td>
                <td>{item.Listdv.join(",")}</td>
                <td
                  onClick={() => {
                    handleChangeDetail(item.id);
                  }}
                  className={cx("txtDetail")}
                >
                  <a>Chi tiết</a>
                </td>
                <td
                  onClick={() => {
                    handleChangeUpdate(item.id);
                  }}
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

export default TableDevice;
