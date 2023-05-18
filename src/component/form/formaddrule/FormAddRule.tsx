import React, { useContext, useState } from "react";
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
import { Role } from "../../../type";
import { useDispatch } from "react-redux";
import RoleSlices from "../../reudux/slices/RoleSlices";
const cx = classNames.bind(styles);

const FormAddRule = () => {
  const [role, setRole] = useState<Role>({
    name: "",
    des: "",
    listFuncA: [],
    listFuncB: [],
    id: "",
  });

  const handleCheck = (type: any, checked: any, item: string) => {
    console.log(checked);
    if (checked) {
      switch (type) {
        case "FuncA":
          if (item === "") {
            setRole({
              ...role,
              listFuncA: ["Chức năng X", "Chức năng Y", "Chức năng Z"],
            });
          } else {
            setRole({ ...role, listFuncA: [...role.listFuncA, item] });
          }
          break;
        case "FuncB":
          if (item === "") {
            setRole({
              ...role,
              listFuncB: ["Chức năng X", "Chức năng Y", "Chức năng Z"],
            });
          } else {
            setRole({ ...role, listFuncB: [...role.listFuncB, item] });
          }
          break;
        default:
      }
    } else {
      switch (type) {
        case "FuncA":
          if (item === "") {
            setRole({
              ...role,
              listFuncA: [""],
            });
          } else {
            const newGate = role.listFuncA.filter((e) => e !== item);
            setRole({ ...role, listFuncA: newGate });
          }
          break;
        case "FuncB":
          if (item === "") {
            setRole({
              ...role,
              listFuncB: [""],
            });
          } else {
            const newGate = role.listFuncB.filter((e) => e !== item);
            setRole({ ...role, listFuncB: newGate });
          }
          break;
        default:
      }
    }
  };
  const dispatch = useDispatch();
  const handleAddRole = () => {
    dispatch(RoleSlices.actions.AddRole(role));
  };
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
                  onChange={(e: any) => {
                    setRole({ ...role, name: e.target.value });
                  }}
                />
              </div>
              <div className={cx("Inputtemp")}>
                <p className={cx("Inputtemptxt")}>
                  Mô tả:: <label style={{ color: "red" }}>*</label>
                </p>
                <TextArea
                  placeholder="Nhập mô tả"
                  style={{ width: "100%" }}
                  onChange={(e: any) => {
                    setRole({ ...role, des: e.target.value });
                  }}
                />
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
                {/* <Checkbox.Group className={cx("AddCheck")}> */}

                <Checkbox
                  onChange={(e) => {
                    handleCheck("FuncA", e.target.checked, "");
                  }}
                  // checked={
                  //   role.listFuncA.toString() ===
                  //   ["Chức năng X", "Chức năng Y", "Chức năng Z"].toString()
                  //     ? true
                  //     : false
                  // }
                >
                  Tất cả
                </Checkbox>
                <Checkbox
                  onChange={(e) => {
                    handleCheck("FuncA", e.target.checked, "Chức năng X");
                  }}
                  checked={role.listFuncA.includes("Chức năng X")}
                >
                  Chức năng X
                </Checkbox>
                <Checkbox
                  onChange={(e) => {
                    handleCheck("FuncA", e.target.checked, "Chức năng Y");
                  }}
                  checked={role.listFuncA.includes("Chức năng Y")}
                >
                  Chức năng Y
                </Checkbox>
                <Checkbox
                  onChange={(e) => {
                    handleCheck("FuncA", e.target.checked, "Chức năng Z");
                  }}
                  checked={role.listFuncA.includes("Chức năng Z")}
                >
                  Chức năng Z
                </Checkbox>
                {/* </Checkbox.Group> */}

                <h4 style={{ color: "rgba(255, 117, 6, 1)" }}>
                  Nhóm chức năng B
                </h4>
                {/* <Checkbox.Group className={cx("AddCheck")}> */}

                <Checkbox
                  onChange={(e) => {
                    handleCheck("FuncB", e.target.checked, "");
                  }}
                  // checked={
                  //   role.listFuncB.toString() ===
                  //   ["Chức năng X", "Chức năng Y", "Chức năng Z"].toString()
                  //     ? true
                  //     : false
                  // }
                >
                  Tất cả
                </Checkbox>
                <Checkbox
                  onChange={(e) => {
                    handleCheck("FuncB", e.target.checked, "Chức năng X");
                  }}
                  checked={role.listFuncB.includes("Chức năng X")}
                >
                  Chức năng X
                </Checkbox>
                <Checkbox
                  onChange={(e) => {
                    handleCheck("FuncB", e.target.checked, "Chức năng Y");
                  }}
                  checked={role.listFuncB.includes("Chức năng Y")}
                >
                  Chức năng Y
                </Checkbox>
                <Checkbox
                  onChange={(e) => {
                    handleCheck("FuncB", e.target.checked, "Chức năng Z");
                  }}
                  checked={role.listFuncB.includes("Chức năng Z")}
                >
                  Chức năng z
                </Checkbox>

                {/* </Checkbox.Group> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={cx("btn")}>
        <button className={cx("btnCancel")}>Hủy bỏ</button>
        <button className={cx("btnAdd")} onClick={handleAddRole}>
          Thêm vai trò
        </button>
      </div>
    </div>
  );
};

export default FormAddRule;
