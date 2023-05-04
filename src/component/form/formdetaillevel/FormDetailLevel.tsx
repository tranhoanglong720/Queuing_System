import React from "react";
import styles from "./FormDetail.module.scss";
import classNames from "classnames/bind";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
const FormDeltailLevel = () => {
  const navigate = useNavigate();
  const handleChangeBack = () => {
    navigate("/level?name=Cấp số&list=Danh sách Cấp số");
  };
  return (
    <div>
      <div className={cx("wrapEdit")} onClick={handleChangeBack}>
        <img
          src={require("../../../assent/back-square.png")}
          style={{ width: "50%" }}
        />
        <h6 className={cx("txtEdit")}>Quay lại</h6>
      </div>
      <div className={cx("wrapFormAdd")}>
        <h6 className={cx("txtFormTitle")}>Thông tin cấp số</h6>
        <div className={cx("addForm")}>
          <div className={cx("addLeft")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Họ tên:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  Nguyễn Thị Dung
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tên dịch vụ:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  Khám tim mạch
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Số thứ tự:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  2001201
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Thời gian cấp:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  14:35 - 07/11/2021
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Hạn sử dụng:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  18:00 - 07/11/2021
                </label>
              </p>
            </div>
          </div>
          <div className={cx("addRight")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Nguồn cấp:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  Kiosk
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Trạng thái:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  Đang chờ
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Số điện thoại:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  0948523623
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Địa chỉ Email:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  nguyendung@gmail.com
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDeltailLevel;
