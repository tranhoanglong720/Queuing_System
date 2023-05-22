import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./ListLevel.module.scss";
import classNames from "classnames/bind";
import FilterLevel from "../filter/filterlevel/FilterLevel";
import TableLevel from "../table/tablelevel/TableLevel";
import { useAppDispatch } from "../reudux/hook";
import { getListLevel } from "../reudux/slices/LevelSlices";
import { useSelector } from "react-redux";
import { ListLevelFind } from "../reudux/selector";

const cx = classNames.bind(styles);

const ListLevel = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChangPageAdd = () => {
    dispatch(getListLevel());
    setTimeout(() => {
      navigate("/leveladd?name=Cấp số&list=Danh sách cấp số&model=Cấp số mới");
    }, 1000);
  };

  useEffect(() => {
    dispatch(getListLevel());
  }, []);
  const ListLevels = useSelector(ListLevelFind);
  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <h4 className={cx("title")}>Danh sách thiết bị</h4>
        <FilterLevel />
        <TableLevel data={ListLevels} />
        <div className={cx("wrapAdd")} onClick={handleChangPageAdd}>
          <img
            src={require("../../assent/add-square.png")}
            style={{ width: "50%" }}
          />
          <h6 className={cx("btnThem")}>Cấp số mới</h6>
        </div>
      </div>
    </Container>
  );
};

export default ListLevel;
