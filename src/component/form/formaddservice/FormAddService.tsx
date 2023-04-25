import React from "react";
import styles from "./FormAddService.module.scss";
import classNames from "classnames/bind";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Input, Select, Checkbox } from "antd";
import type { SelectProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
const cx = classNames.bind(styles);
const FormAddService = () => {
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
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <div>
      <div className={cx("wrapFormAdd")}>
        <h6 className={cx("txtFormTitle")}>Thông tin thiết bị</h6>
        <div className={cx("addForm")}>
          <div className={cx("addLeft")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Mã dịch vụ: :<label style={{ color: "red" }}>*</label>
              </p>
              <Input placeholder="Nhập mã dịch vụ" style={{ width: "100%" }} />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tên dịch vụ ::<label style={{ color: "red" }}>*</label>
              </p>
              <Input placeholder="Nhập tên dịch vụ" />
            </div>
          </div>
          <div className={cx("addRight")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Loại thiết bị:<label style={{ color: "red" }}>*</label>
              </p>

              <TextArea
                style={{ width: "100%", height: "15vh" }}
                placeholder="Nhập mô tả"
              />
            </div>
          </div>
        </div>
        <div>
          <h6>Quy tắc cấp số</h6>
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={onChange}
            className={cx("AddCheck")}
          >
            {" "}
            <div className={cx("AddCheckcontent")}>
              <Checkbox value="A" className={cx("AddCheckcontent")}>
                Tăng tự động từ:
              </Checkbox>
              <h6 className={cx("number")}>0001</h6> đến{" "}
              <h6 className={cx("number")}>9999</h6>
            </div>
            <div className={cx("AddCheckcontent")}>
              <Checkbox value="A" className={cx("AddCheckcontent")}>
                Prefix:
              </Checkbox>
              <h6 className={cx("number")}>0001</h6>
            </div>
            <div className={cx("AddCheckcontent")}>
              <Checkbox value="A" className={cx("AddCheckcontent")}>
                Surfix:
              </Checkbox>
              <h6 className={cx("number")}>0001</h6>
            </div>
            <Checkbox value="D">Reset mỗi ngày</Checkbox>
          </Checkbox.Group>
        </div>

        <p className={cx("Inputtemptxt")}>
          <label style={{ color: "red" }}>*</label>Là trường thông tin bắt buộc
        </p>
      </div>
      <div className={cx("btn")}>
        <button className={cx("btnCancel")}>Hủy bỏ</button>
        <button className={cx("btnAdd")}>Thêm dịch vụ</button>
      </div>
    </div>
  );
};

export default FormAddService;
