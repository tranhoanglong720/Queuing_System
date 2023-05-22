import React, { useState } from "react";
import styles from "./FormAddDevice.module.scss";
import classNames from "classnames/bind";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Input, Select } from "antd";
import type { SelectProps } from "antd";
import { Device } from "../../../type";
import { useSelector } from "react-redux";
import { ListServiceFind } from "../../reudux/selector";
import { useAppDispatch } from "../../reudux/hook";
import DeviceSlices from "../../reudux/slices/DeviceSlices";
const cx = classNames.bind(styles);
const FormAddDevice = () => {
  const ListService = useSelector(ListServiceFind);
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
  const [device, setDevice] = useState<Device>({
    ip: "",
    id: "",
    matb: "",
    Listdv: [],
    user: "",
    password: "",
    loaitb: "",
    nametb: "",
  });
  const dispatch = useAppDispatch();
  const handleAdd = () => {
    dispatch(DeviceSlices.actions.AddDevice(device));
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
                // defaultValue=""
                placeholder="Nhập loại thiết bị"
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
                placeholder="Nhập tên đăng nhập"
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
                placeholder="Nhập mật khẩu"
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
            placeholder="Nhập loại dịch vụ đang sử dụng"
            // defaultValue={["a10", "c12"]}
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
        <button className={cx("btnAdd")} onClick={handleAdd}>
          Thêm thiết bị
        </button>
      </div>
    </div>
  );
};

export default FormAddDevice;
