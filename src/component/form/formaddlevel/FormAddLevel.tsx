import React, { useContext } from "react";
import styles from "./FormAddLevel.module.scss";
import classNames from "classnames/bind";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Input, Select } from "antd";
import type { SelectProps } from "antd";
import ModalInLevel from "../../modalinlevel/ModalInLevel";
import { AppContext } from "../../context/AppProvider";
const cx = classNames.bind(styles);
const FormAddLevel = () => {
  const options: SelectProps["options"] = [];
  const { setOpenIn } = useContext(AppContext);

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  const handleIn = () => {
    setOpenIn(true);
  };
  return (
    <div className={cx("wrapFormAdd")}>
      <h6 className={cx("txtFormTitle")}>Cấp số mới</h6>
      <h5>Dịch vụ khách hàng lựa chọn</h5>
      <Select defaultValue="" style={{ width: "40vh" }}>
        <Select.Option value="" label="">
          Khám tim mạch
        </Select.Option>
        <Select.Option value="" label="">
          Khám sản - Phụ khoa
        </Select.Option>
        <Select.Option value="" label="">
          Khám tai mũi họng
        </Select.Option>
      </Select>
      <div className={cx("btn")}>
        <button className={cx("btnCancel")}>Hủy bỏ</button>
        <button className={cx("btnAdd")} onClick={handleIn}>
          In số
        </button>
      </div>
      {}
      <ModalInLevel />
    </div>
  );
};

export default FormAddLevel;
