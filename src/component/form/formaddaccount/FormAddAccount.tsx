import React, { useState } from "react";
import styles from "./FormAddDevice.module.scss";
import classNames from "classnames/bind";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Input, Select } from "antd";
import type { SelectProps } from "antd";
import { useDispatch } from "react-redux";
import AccountSlices from "../../reudux/slices/AccountSlices";
import { User } from "../../../type";

const cx = classNames.bind(styles);
const FormAddAccount = () => {
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
  const [user, setUser] = useState<User>({
    name: "",
    phone: "",
    email: "",
    role: "",
    account: "",
    password: "",
    state: "",
    id: "",
  });
  const dispatch = useDispatch();

  const handleAdd = () => {
    // const db = getDatabase();
    // const idK = push(ref(db, "TicketPacked")).key;
    // // setTickets({ ...Tickets, id: idK });
    // const data = dataref.ref(`TicketPacked`).push();
    // data.set({ ...Tickets, id: data.key }).catch(alert);
    // console.log(Tickets);
    dispatch(AccountSlices.actions.AddUser(user));
  };
  // console.log(user);
  return (
    <div>
      <div className={cx("wrapFormAdd")}>
        <h6 className={cx("txtFormTitle")}>Thông tin tài khoản</h6>
        <div className={cx("addForm")}>
          <div className={cx("addLeft")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Họ tên:<label style={{ color: "red" }}>*</label>
              </p>
              <Input
                placeholder="Nhập họ tên"
                style={{ width: "100%" }}
                onChange={(e: any) => {
                  setUser({ ...user, name: e.target.value });
                }}
              />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Số điện thoại:<label style={{ color: "red" }}>*</label>
              </p>
              <Input
                placeholder="Nhập số điện thoại"
                onChange={(e: any) => {
                  setUser({ ...user, phone: e.target.value });
                }}
              />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Email:<label style={{ color: "red" }}>*</label>
              </p>
              <Input
                placeholder="Nhập email"
                onChange={(e: any) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Vai trò:<label style={{ color: "red" }}>*</label>
              </p>

              <Select
                // defaultValue=""
                placeholder="Nhập tình trạng"
                style={{ width: "100%" }}
                // bordered={false}
                options={[
                  { value: "Kế toán", label: "Kế toán" },
                  { value: "Quản Lý", label: "Quản lý" },
                  { value: "Admin", label: "Adimin" },
                ]}
                onChange={(value: string) => {
                  setUser({ ...user, role: value });
                }}
              />
            </div>
          </div>
          <div className={cx("addRight")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tên đăng nhập:<label style={{ color: "red" }}>*</label>
              </p>
              <Input
                placeholder="Nhập tên đăng nhập"
                onChange={(e: any) => {
                  setUser({ ...user, account: e.target.value });
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
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Nhập lại mật khẩu:<label style={{ color: "red" }}>*</label>
              </p>
              <Input placeholder="Nhập lại mật khẩu" />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tình trạng:<label style={{ color: "red" }}>*</label>
              </p>

              <Select
                // defaultValue=""
                placeholder="Nhập tình trạng"
                style={{ width: "100%" }}
                // bordered={false}
                options={[
                  { value: "Tất cả", label: "Tất cả" },
                  { value: "Hoạt động", label: "Hoạt động" },
                  { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
                ]}
                onChange={(value: string) => {
                  setUser({ ...user, state: value });
                }}
              />
            </div>
          </div>
        </div>

        <p className={cx("Inputtemptxt")}>
          <label style={{ color: "red" }}>*</label>Là trường thông tin bắt buộc
        </p>
      </div>
      <div className={cx("btn")}>
        <button className={cx("btnCancel")}>Hủy bỏ</button>
        <button className={cx("btnAdd")} onClick={handleAdd}>
          Thêm tài khoản
        </button>
      </div>
    </div>
  );
};

export default FormAddAccount;
