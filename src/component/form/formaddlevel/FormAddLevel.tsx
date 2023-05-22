import React, { useContext, useEffect, useState } from "react";
import styles from "./FormAddLevel.module.scss";
import classNames from "classnames/bind";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Input, Select } from "antd";
import type { SelectProps } from "antd";
import ModalInLevel from "../../modalinlevel/ModalInLevel";
import { AppContext } from "../../context/AppProvider";
import { useSelector } from "react-redux";
import { getListService } from "../../reudux/slices/ServiceSlieces";
import { ListLevelFind, ListServiceFind } from "../../reudux/selector";
import { Level, Service } from "../../../type";
import { useAppDispatch } from "../../reudux/hook";
import LevelSlices from "../../reudux/slices/LevelSlices";
const cx = classNames.bind(styles);
const FormAddLevel = () => {
  const options: SelectProps["options"] = [];
  const { setOpenIn } = useContext(AppContext);

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  var currentdate = new Date();
  var datetime =
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    "-" +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();
  var experDate =
    18 +
    ":" +
    "00" +
    "-" +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();
  const dispatch = useAppDispatch();
  const ListService = useSelector(ListServiceFind);
  const ListLevel = useSelector(ListLevelFind);
  console.log(ListLevel);
  const [level, setLevel] = useState<Level>({
    STT: ListLevel.length,
    customer: "Trần Hoàng Long",
    namedv: "",
    dateCreate: datetime,
    experDate: experDate,
    stateLevel: "Đang sử dụng",
    source: "Kiosk",
    id: "",
  });
  const handleIn = () => {
    setOpenIn(true);
    dispatch(LevelSlices.actions.addLevel(level));
  };

  return (
    <div className={cx("wrapFormAdd")}>
      <h6 className={cx("txtFormTitle")}>Cấp số mới</h6>
      <h5>Dịch vụ khách hàng lựa chọn</h5>
      <Select
        defaultValue=""
        style={{ width: "40vh" }}
        onChange={(value: string) => {
          setLevel({ ...level, namedv: value });
        }}
      >
        {ListService.map((item: Service) => (
          <Select.Option value={item.name} label={item.name} key={item.id}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
      <div className={cx("btn")}>
        <button className={cx("btnCancel")}>Hủy bỏ</button>
        <button className={cx("btnAdd")} onClick={handleIn}>
          In số
        </button>
      </div>
      {}
      <ModalInLevel data={level} />
    </div>
  );
};

export default FormAddLevel;
