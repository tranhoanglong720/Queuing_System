import React from "react";
import styles from "./FilterAccount.module.scss";
import classNames from "classnames/bind";
import { Select, Input } from "antd";
const cx = classNames.bind(styles);
const { Search } = Input;

const FilterAccount = () => {
  return (
    <div className={cx("wrapFilterDevice")}>
      <div>
        <h6>Tên vai trò</h6>
        <Select defaultValue="" style={{ width: "40vh" }}>
          <Select.Option value="" label="">
            Kế toán
          </Select.Option>
          <Select.Option value="" label="">
            Admin
          </Select.Option>
          <Select.Option value="" label="">
            Quản lý
          </Select.Option>
        </Select>
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

export default FilterAccount;
