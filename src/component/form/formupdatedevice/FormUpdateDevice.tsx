import React, { useState } from "react";
import styles from "./FormUpdateDevice.module.scss";
import classNames from "classnames/bind";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Input, Select } from "antd";
import type { SelectProps } from "antd";
import { Device } from "../../../type";
import { useAppDispatch } from "../../reudux/hook";
import { useSelector } from "react-redux";
import { ListServiceFind } from "../../reudux/selector";
import DeviceSlices from "../../reudux/slices/DeviceSlices";
const cx = classNames.bind(styles);
const FormUpdateDevice = () => {
  const dispatch = useAppDispatch();
  const devices = useSelector((state: any) => state.DeviceSlices.Device);
  const ListService = useSelector(ListServiceFind);
  const [device, setDevice] = useState<Device>({
    ip: devices.ip,
    id: devices.id,
    matb: devices.matb,
    Listdv: devices.Listdv,
    user: devices.user,
    password: devices.password,
    loaitb: devices.loaitb,
    nametb: devices.nametb,
  });

  const options: SelectProps["options"] = [];

  for (let i = 0; i < ListService.length; i++) {
    options.push({
      label: ListService[i].name,
      value: ListService[i].name,
    });
  }
  const handleChange = (value: string[]) => {
    setDevice({ ...device, Listdv: value });
    console.log(`selected ${value}`);
  };
  const handleUpdate = () => {
    dispatch(DeviceSlices.actions.updateDevice(device));
  };
  return (
    <div>
      <div className={cx("wrapFormAdd")}>
        <h6 className={cx("txtFormTitle")}>Thông tin thiết bị</h6>
        <div className={cx("addForm")}>
          <div className={cx("addLeft")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Mã thiết bị:<label style={{ color: "red" }}>*</label>
              </p>
              <Input
                placeholder="Nhập mã thiết bị"
                style={{ width: "100%" }}
                defaultValue={devices.matb}
                onChange={(e: any) => {
                  setDevice({ ...device, matb: e.target.value });
                }}
              />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tên thiết bị:<label style={{ color: "red" }}>*</label>
              </p>
              <Input
                placeholder="Nhập tên thiết bị"
                defaultValue={devices.nametb}
                onChange={(e: any) => {
                  setDevice({ ...device, nametb: e.target.value });
                }}
              />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Địa chỉ IP:<label style={{ color: "red" }}>*</label>
              </p>
              <Input
                placeholder="Nhập địa chỉ IP"
                defaultValue={devices.ip}
                onChange={(e: any) => {
                  setDevice({ ...device, ip: e.target.value });
                }}
              />
            </div>
          </div>
          <div className={cx("addRight")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Loại thiết bị:<label style={{ color: "red" }}>*</label>
              </p>
              <Select
                defaultValue={devices.loaitb}
                style={{ width: "100%" }}
                // bordered={false}
                options={[
                  { value: "Kiosk", label: "Kiosk" },
                  { value: "Display counter", label: "Display counter" },
                ]}
                onChange={(value: string) => {
                  setDevice({ ...device, loaitb: value });
                }}
              />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tên đăng nhập:<label style={{ color: "red" }}>*</label>
              </p>
              <Input
                placeholder="Nhập tên thiết bị"
                defaultValue={devices.user}
                onChange={(e: any) => {
                  setDevice({ ...device, user: e.target.value });
                }}
              />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Mật khẩu:<label style={{ color: "red" }}>*</label>
              </p>
              <Input
                placeholder="Nhập địa chỉ IP"
                defaultValue={devices.password}
                onChange={(e: any) => {
                  setDevice({ ...device, password: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className={cx("Inputtemp")}>
          <p className={cx("Inputtemptxt")}>
            Dịch vụ sử dụng:<label style={{ color: "red" }}>*</label>
          </p>
          {/* <Input placeholder="Nhập dịch vụ sử dụng" /> */}
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={devices.Listdv}
            onChange={handleChange}
            options={options}
          />
        </div>
        <p className={cx("Inputtemptxt")}>
          <label style={{ color: "red" }}>*</label>Là trường thông tin bắt buộc
        </p>
      </div>
      <div className={cx("btn")}>
        <button className={cx("btnCancel")}>Hủy bỏ</button>
        <button className={cx("btnAdd")} onClick={handleUpdate}>
          Cập nhật
        </button>
      </div>
    </div>
  );
};

export default FormUpdateDevice;
