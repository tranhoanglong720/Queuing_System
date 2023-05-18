import React, { useContext, useState } from "react";
import { Button, Modal } from "antd";
import { AppContext } from "../context/AppProvider";
import styles from "./ModalInLevel.module.scss";
import classNames from "classnames/bind";
import { Level } from "../../type";

const cx = classNames.bind(styles);
type Props = { data: Level };
const ModalInLevel = (props: Props) => {
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
          <h3 className={cx("txtMa")}>{props.data.STT}</h3>
          <h5 className={cx("txtDv")}>
            DV: {props.data.namedv} (tại quầy số 1)
          </h5>
          <div className={cx("txtTime")}>
            <label>Thời gian cấp:</label>
            <label>{props.data.dateCreate}</label>
          </div>
          <div className={cx("txtTime")}>
            <label>Hạn sử dụng:</label>
            <label>{props.data.experDate}</label>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalInLevel;
