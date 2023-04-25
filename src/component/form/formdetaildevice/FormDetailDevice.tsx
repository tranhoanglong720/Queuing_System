import React from "react";
import styles from "./FormDetail.module.scss";
import classNames from "classnames/bind";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
const FormDetailDevice = () => {
  const navigate = useNavigate();
  const handleChangeUpdate = () => {
    navigate(
      "/deviceupdate?name=Thiết bị&list=Danh sách thiết bị&model=Cập nhật thiết bị"
    );
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
                  KIO_01
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tên thiết bị:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  Kiosk
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Địa chỉ IP:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  128.172.308
                </label>
              </p>
            </div>
          </div>
          <div className={cx("addRight")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Loại thiết bị:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  Kiosk
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tên đăng nhập:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  Linhkyo011
                </label>
              </p>
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Mật khẩu:
                <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
                  CMS
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className={cx("Inputtemp")}>
          <p className={cx("Inputtemptxt")}>
            Dịch vụ sử dụng:
            <label style={{ color: "rgba(83, 82, 97, 1)", marginLeft: 15 }}>
              Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai
              mũi họng, Khám hô hấp, Khám tổng quát.
            </label>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormDetailDevice;
