import React, { useContext, useState } from "react";
import { Button, Modal } from "antd";
import { AppContext } from "../context/AppProvider";
import styles from "./ModalInLevel.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ModalInLevel: React.FC = () => {
  const { openIn, setOpenIn } = useContext(AppContext);

  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setOpenIn(true);
  };

  const handleOk = () => {
    setOpenIn(false);
  };

  const handleCancel = () => {
    setOpenIn(false);
  };

  return (
    <>
      <Modal open={openIn} onOk={handleOk}>
        <div>
          <h6 className={cx("txtSTT")}>Số thứ tự được cấp</h6>
          <h3 className={cx("txtMa")}>2001201</h3>
          <h5 className={cx("txtDv")}>DV: Khám răng hàm mặt (tại quầy số 1)</h5>
          <div className={cx("txtTime")}>
            <label>Thời gian cấp:</label>
            <label>09:30 11/10/2021</label>
          </div>
          <div className={cx("txtTime")}>
            <label>Hạn sử dụng:</label>
            <label>17:30 11/10/2021</label>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalInLevel;
