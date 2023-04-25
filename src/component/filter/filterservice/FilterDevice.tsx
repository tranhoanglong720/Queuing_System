import React from "react";
import styles from "./FilterService.module.scss";
import classnames from "classnames/bind";
import { Select, Input } from "antd";

const cx = classnames.bind(styles);
const { Search } = Input;
const FilterService = () => {
  return (
    <div className={cx("wrapFilterDevice")}>
      <div>
        <h6>Trạng thái hoạt động</h6>
        <Select defaultValue="" style={{ width: "40vh" }}>
          <Select.Option value="" label="">
            Tất cả
          </Select.Option>
          <Select.Option value="" label="">
            Hoạt động
          </Select.Option>
          <Select.Option value="" label="">
            Ngưng hoạt động
          </Select.Option>
        </Select>
      </div>
      <div>
        <h6>Chọn thời gian</h6>
        <input type="date" className={cx("dateFrom")} />
        <input type="date" />
      </div>
      <div>
        <h6>Từ khoá</h6>
        <Search
          placeholder="Nhập từ khóa"
          className={cx("Filter-search")}
          style={{ width: "40vh" }}
        />
      </div>
    </div>
  );
};

export default FilterService;
