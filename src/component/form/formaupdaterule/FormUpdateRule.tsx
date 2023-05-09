import React, { useContext } from "react";
import styles from "./FormAddRule.module.scss";
import classNames from "classnames/bind";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Checkbox, Input, Select } from "antd";
import type { SelectProps } from "antd";
import ModalInLevel from "../../modalinlevel/ModalInLevel";
import { AppContext } from "../../context/AppProvider";
import TextArea from "antd/es/input/TextArea";
const cx = classNames.bind(styles);
const FormUpdateRule = () => {
  return (
    <div>
      <div className={cx("wrapFormAdd")}>
        <h4>Thông tin vai trò</h4>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={cx("Inputtemp")}>
                <p className={cx("Inputtemptxt")}>
                  Tên vai trò: <label style={{ color: "red" }}>*</label>
                </p>
                <Input
                  placeholder="Nhập tên vai trò"
                  style={{ width: "100%" }}
                />
              </div>
              <div className={cx("Inputtemp")}>
                <p className={cx("Inputtemptxt")}>
                  Mô tả:: <label style={{ color: "red" }}>*</label>
                </p>
                <TextArea placeholder="Nhập mô tả" style={{ width: "100%" }} />
              </div>

              <p className={cx("Inputtemptxt")}>
                <label style={{ color: "red" }}>*</label>Là trường thông tin bắt
                buộc
              </p>
            </Col>
            <Col lg={6}>
              <p className={cx("Inputtemptxt")}>
                Phân quyền chức năng: <label style={{ color: "red" }}>*</label>
              </p>
              <div className={cx("SelectRole")}>
                <h4 style={{ color: "rgba(255, 117, 6, 1)" }}>
                  Nhóm chức năng A
                </h4>
                <Checkbox.Group className={cx("AddCheck")}>
                  <Checkbox>Tất cả</Checkbox>
                  <Checkbox>Chức năng x</Checkbox>
                  <Checkbox>Chức năng y</Checkbox>
                  <Checkbox>Chức năng z</Checkbox>
                </Checkbox.Group>

                <h4 style={{ color: "rgba(255, 117, 6, 1)" }}>
                  Nhóm chức năng B
                </h4>
                <Checkbox.Group className={cx("AddCheck")}>
                  <Checkbox>Tất cả </Checkbox>
                  <Checkbox>Chức năng x</Checkbox>
                  <Checkbox>Chức năng y</Checkbox>
                  <Checkbox>Chức năng z</Checkbox>
                </Checkbox.Group>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={cx("btn")}>
        <button className={cx("btnCancel")}>Hủy bỏ</button>
        <button className={cx("btnAdd")}>Cập nhật</button>
      </div>
    </div>
  );
};

export default FormUpdateRule;
