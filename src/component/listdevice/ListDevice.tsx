import React, { useEffect } from "react";
import styles from "./ListDevice.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FilterDevice from "../filter/filterdivice/FilterDevice";
import TableDevice from "../table/tabledevice/TableDevice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../reudux/hook";
import { getListService } from "../reudux/slices/ServiceSlieces";
import { getListDevice } from "../reudux/slices/DeviceSlices";
import { useSelector } from "react-redux";
import { ListDeviceFind } from "../reudux/selector";

const cx = classnames.bind(styles);

const ListDevice = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleChangPageAdd = () => {
    dispatch(getListService());
    setTimeout(() => {
      navigate(
        "/adddevice?name=Thiết bị&list=Danh sách thiết bị&model=Thêm thiết bị"
      );
    }, 1000);
  };
  useEffect(() => {
    dispatch(getListDevice());
  }, []);
  const Listdevices = useSelector(ListDeviceFind);
  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <h4 className={cx("title")}>Danh sách thiết bị</h4>
        <FilterDevice />
        <TableDevice data={Listdevices} />
        <div className={cx("wrapAdd")} onClick={handleChangPageAdd}>
          <img
            src={require("../../assent/add-square.png")}
            style={{ width: "50%" }}
          />
          <h6 className={cx("btnThem")}>Thêm Thiết bị</h6>
        </div>
      </div>
    </Container>
  );
};

export default ListDevice;
