import React from "react";
import styles from "./About.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AboutCS = () => {
  return (
    <div className={cx("warpAbout")}>
      <div className={cx("percent")}>90%</div>
      <div>
        <h5>4.221</h5>
        <p className={cx("txtName")}>Cấp số</p>
      </div>
      <div>
        <div className={cx("title")}>
          <img
            src={require("../../assent/xanh.png")}
            style={{ width: 6, height: 8 }}
          />
          <p className={cx("txt")}> Đang sử dụng</p>
          <p className={cx("txtName")}>3.799</p>
        </div>
        <div className={cx("title")}>
          <img
            src={require("../../assent/xanh.png")}
            style={{ width: 6, height: 8 }}
          />
          <p className={cx("txt")}> Đang chờ</p>
          <p className={cx("txtName")}>3.799</p>
        </div>
        <div className={cx("title")}>
          <img
            src={require("../../assent/do.png")}
            style={{ width: 6, height: 8 }}
          />
          <p className={cx("txt")}> Bỏ qua</p>
          <p className={cx("txtName")}>3.799</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCS;
