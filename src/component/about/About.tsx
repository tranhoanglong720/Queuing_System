import React from "react";
import styles from "./About.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const About = () => {
  return (
    <div className={cx("warpAbout")}>
      <div className={cx("percent")}>90%</div>
      <div>
        <h5>4.221</h5>
        <p className={cx("txtName")}>Thiết bị</p>
      </div>
      <div>
        <div className={cx("title")}>
          <img
            src={require("../../assent/xanh.png")}
            style={{ width: 6, height: 8 }}
          />
          <p className={cx("txt")}> Đang hoạt động</p>
          <p className={cx("txtName")}>3.799</p>
        </div>
        <div className={cx("title")}>
          <img
            src={require("../../assent/do.png")}
            style={{ width: 6, height: 8 }}
          />
          <p className={cx("txt")}> Ngưng hoạt động</p>
          <p className={cx("txtName")}>3.799</p>
        </div>
      </div>
    </div>
  );
};

export default About;
