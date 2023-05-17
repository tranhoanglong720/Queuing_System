import React, { useState, useContext } from "react";
import {
  HomeOutlined,
  ExceptionOutlined,
  SettingOutlined,
  BoxPlotOutlined,
} from "@ant-design/icons";
import { AppContext } from "../context/AppProvider";
import styles from "./MenuBar.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core";
import { getAuth, signOut } from "firebase/auth";
const cx = classNames.bind(styles);
const Menubar = () => {
  const { active, setActive } = useContext(AppContext);
  // const [active, setActive] = useState("");
  const navigate = useNavigate();

  const handlePageDash = () => {
    setActive("Dash");
    navigate(`/dash`);
  };
  const handlePageDevice = () => {
    navigate("/device?name=Thiết bị&list=Danh sách thiết bị");
    setActive("Device");
  };
  const handlePageService = () => {
    setActive("Service");
    navigate("/service?name=Dịch vụ&list=Danh sách dịch vụ");
  };
  const handlePageLevel = () => {
    setActive("Level");
    navigate("/level?name=Cấp số&list=Danh sách cấp số");
  };
  const handlePageReport = () => {
    setActive("Report");
    navigate("/report?name=Báo cáo&list=Lập báo cáo");
  };
  const handlePageAcount = () => {
    setActive("Acount");
    navigate("/manageracount?name=Cài đặt hệ thống&list=Quản lý tài khoản");
  };
  const handlePageRule = () => {
    setActive("Rule");
    navigate("/managerrule?name=Cài đặt hệ thống&list=Quản lý vai trò");
  };
  const handlePageDiary = () => {
    setActive("Diary");
    navigate("/managerdiary?name=Cài đặt hệ thống&list=Nhật ký hoạt động");
  };
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className={cx("wrap_Menubar")}>
      <div className={cx("logo")}>
        <img
          src={require("../../assent/Logo_alta.png")}
          style={{ width: "40%" }}
        />
      </div>
      <div
        className={cx(
          "wrap_Menubar_content",
          active === "Dash" ? "Dash" : null
        )}
        onClick={handlePageDash}
      >
        <img src={require("../../assent/iconDash.png")} />
        <h6 className={cx("wrap_Menubar_txt")}>Thông kê</h6>
      </div>
      <div
        className={cx(
          "wrap_Menubar_content",
          active === "Device" ? "Device" : null
        )}
        onClick={handlePageDevice}
      >
        <img src={require("../../assent/thietbi.png")} />
        <h6 className={cx("wrap_Menubar_txt")}>Thiết bị</h6>
      </div>
      <div
        className={cx(
          "wrap_Menubar_content",
          active === "Service" ? "Service" : null
        )}
        onClick={handlePageService}
      >
        <img src={require("../../assent/dichvu.png")} />
        <h6 className={cx("wrap_Menubar_txt")}>Dịch vụ</h6>
      </div>
      <div
        className={cx(
          "wrap_Menubar_content",
          active === "Level" ? "Level" : null
        )}
        onClick={handlePageLevel}
      >
        <img src={require("../../assent/capso.png")} />
        <h6 className={cx("wrap_Menubar_txt")}>Cấp số</h6>
      </div>
      <div
        className={cx(
          "wrap_Menubar_content",
          active === "Report" ? "Report" : null
        )}
        onClick={handlePageReport}
      >
        <img src={require("../../assent/baocao.png")} />
        <h6 className={cx("wrap_Menubar_txt")}>Báo cáo</h6>
      </div>
      <div
        className={cx(
          "wrap_Menubar_content",
          active === "Caidat" ? "Caidat" : null
        )}
      >
        <img src={require("../../assent/setting.png")} />
        <h6 className={cx("wrap_Menubar_txt")}>Cài đặt hệ thống</h6>
      </div>
      <h6
        className={cx(
          "wrap_Menubar_content_txt",
          active === "Rule" ? "Rule" : null
        )}
        onClick={handlePageRule}
      >
        Quản lý vai trò
      </h6>
      <h6
        className={cx(
          "wrap_Menubar_content_txt",
          active === "Acount" ? "Acount" : null
        )}
        onClick={handlePageAcount}
      >
        Quản lý tài khoản
      </h6>
      <h6
        className={cx(
          "wrap_Menubar_content_txt",
          active === "Diary" ? "Diary" : null
        )}
        onClick={handlePageDiary}
      >
        Nhật ký người dùng
      </h6>

      <div className={cx("logout")} onClick={handleSignOut}>
        <img src={require("../../assent/logout.png")} />
        <p style={{ color: "rgba(255, 117, 6, 1)", margin: 0 }}> Đăng Xuất</p>
      </div>
    </div>
  );
};

export default Menubar;
