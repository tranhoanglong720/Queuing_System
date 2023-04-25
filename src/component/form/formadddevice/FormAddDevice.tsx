import React from "react";
import styles from "./FormAddDevice.module.scss";
import classNames from "classnames/bind";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Input, Select } from "antd";
import type { SelectProps } from "antd";
const cx = classNames.bind(styles);
const FormAddDevice = () => {
  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
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
              <Input placeholder="Nhập mã thiết bị" style={{ width: "100%" }} />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tên thiết bị:<label style={{ color: "red" }}>*</label>
              </p>
              <Input placeholder="Nhập tên thiết bị" />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Địa chỉ IP:<label style={{ color: "red" }}>*</label>
              </p>
              <Input placeholder="Nhập địa chỉ IP" />
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
              />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tên đăng nhập:<label style={{ color: "red" }}>*</label>
              </p>
              <Input placeholder="Nhập tên thiết bị" />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Mật khẩu:<label style={{ color: "red" }}>*</label>
              </p>
              <Input placeholder="Nhập địa chỉ IP" />
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
        <button className={cx("btnAdd")}>Thêm thiết bị</button>
      </div>
    </div>
  );
};

export default FormAddDevice;
