import React from "react";
import styles from "./FilterServiceDetail.module.scss";
import classnames from "classnames/bind";
import { Select, Input } from "antd";

const cx = classnames.bind(styles);
const { Search } = Input;
const FilterServiceDetail = () => {
  return (
    <div className={cx("wrapFilterDevice")}>
      <div>
        <h6>Trạng thái hoạt động</h6>
        <Select defaultValue="" style={{ width: "15vh" }}>
          <Select.Option value="" label="">
            Tất cả
          </Select.Option>
          <Select.Option value="" label="">
            Đã hoàn thành
          </Select.Option>
          <Select.Option value="" label="">
            Đang thực hiện
          </Select.Option>
          <Select.Option value="" label="">
            Bỏ qua
          </Select.Option>
        </Select>
      </div>
      <div>
        <h6>Chọn thời gian</h6>
        <input
          type="date"
          className={cx("dateFrom")}
          style={{ width: "20vh" }}
        />
        <input type="date" style={{ width: "20vh" }} />
      </div>
      <div>
        <h6>Từ khoá</h6>
        <Search
          placeholder="Nhập từ khóa"
          className={cx("Filter-search")}
          style={{ width: "28vh" }}
        />
      </div>
    </div>
  );
};

export default FilterServiceDetail;
