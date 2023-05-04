import React from "react";
import { Select } from "antd";
import styles from "./FilterLevel.module.scss";
import classNames from "classnames/bind";
import Search from "antd/es/transfer/search";

const cx = classNames.bind(styles);

const FilterLevel = () => {
  return (
    <div className={cx("wrapFilterDevice")}>
      <div>
        <h6>Tên dịch vụ</h6>
        <Select defaultValue="">
          <Select.Option value="" label="">
            Khám sản - Phụ khoa
          </Select.Option>
          <Select.Option value="" label="">
            Khám răng hàm mặt
          </Select.Option>
          <Select.Option value="" label="">
            Khám tai mũi họng
          </Select.Option>
        </Select>
      </div>
      <div>
        <h6>Tình trạng</h6>
        <Select defaultValue="">
          <Select.Option value="" label="">
            Tất cả
          </Select.Option>
          <Select.Option value="" label="">
            Đang chờ
          </Select.Option>
          <Select.Option value="" label="">
            Đã sử dụng
          </Select.Option>
          <Select.Option value="" label="">
            Bỏ qua
          </Select.Option>
        </Select>
      </div>
      <div>
        <h6>Nguồn cấp</h6>
        <Select defaultValue="">
          <Select.Option value="" label="">
            Kiosk
          </Select.Option>
          <Select.Option value="" label="">
            Hệ thống
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
        <h6>Từ khóa</h6>
        <Search placeholder="Nhập từ khóa" />
      </div>
    </div>
  );
};

export default FilterLevel;
