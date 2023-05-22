import React from "react";
import styles from "./FormDetail.module.scss";
import classNames from "classnames/bind";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Device } from "../../../type";
import { useAppDispatch } from "../../reudux/hook";
import { getDevice } from "../../reudux/slices/DeviceSlices";

const cx = classNames.bind(styles);
const FormDetailDevice = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const devices = useSelector((state: any) => state.DeviceSlices.Device);
  const handleChangeUpdate = () => {
    dispatch(getDevice(devices.id));
    setTimeout(() => {
      navigate(
        "/deviceupdate?name=Thiết bị&list=Danh sách thiết bị&model=Cập nhật thiết bị"
      );
    }, 1000);
  };
  return (
    <div>
      <div className={cx("wrapEdit")} onClick={handleChangeUpdate}>
        <img
          src={require("../../../assent/Edit Square.png")}
          style={{ width: "50%" }}
        />
        <h6 className={cx("txtEdit")}>Cập nhật thiết bị</h6>
      </div>
      <div className={cx("wrapFormAdd")}>
        <h6 className={cx("txtFormTitle")}>Thông tin thiết bị</h6>
        <div className={cx("addForm")}>
          <div className={cx("addLeft")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Mã thiết bị:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  {devices.matb}
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tên thiết bị:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  {devices.nametb}
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Địa chỉ IP:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  {devices.ip}
                </label>
              </p>
            </div>
          </div>
          <div className={cx("addRight")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Loại thiết bị:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  {devices.loaitb}
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tên đăng nhập:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  {devices.user}
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Mật khẩu:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  {devices.password}
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className={cx("Inputtemp")}>
          <p className={cx("Inputtemptxt")}>
            Dịch vụ sử dụng:
            <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
              {devices.Listdv.join(",")}
            </label>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormDetailDevice;
