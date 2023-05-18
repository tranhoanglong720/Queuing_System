import React, { useEffect } from "react";
import styles from "./TableService.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

import { Service } from "../../../type";
import { useAppDispatch } from "../../reudux/hook";
import { getService } from "../../reudux/slices/ServiceSlieces";
const cx = classnames.bind(styles);

type Props = { data: Service[] };
const TableService = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleChangeDetail = (id: string) => {
    dispatch(getService(id));
    setTimeout(() => {
      navigate(
        "/servicedetail?name=Dịch vụ&list=Danh sách dịch vụ&model=Chi tiết dịch vụ"
      );
    }, 1000);
  };
  const handleChangeUpdate = (id: string) => {
    dispatch(getService(id));
    setTimeout(() => {
      navigate(
        "/serviceupdate?name=Dịch vụ&list=Danh sách dịch vụ&model=Cập nhật dịch vụ"
      );
    }, 1000);
  };

  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <Table striped bordered variant="white">
          <thead className={cx("wrap_Table")}>
            <tr>
              <th>Mã dịch vụ</th>
              <th>Tên dịch vụ</th>
              <th>Mô tả</th>
              <th>Trạng thái hoạt động</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className={cx("wrap_Table_body")}>
            {props.data?.map((item: Service, index) => (
              <tr key={item.id}>
                <td>{item.ma}</td>
                <td>{item.name}</td>
                <td>{item.des}</td>
                {item.stateService === "true" ? (
                  <td>
                    <div>
                      <img
                        src={require("../../../assent/xanh.png")}
                        style={{ marginBottom: 5, marginRight: 2 }}
                      />
                      Hoạt động
                    </div>
                  </td>
                ) : (
                  <td>
                    <div>
                      <img
                        src={require("../../../assent/do.png")}
                        style={{ marginBottom: 5, marginRight: 2 }}
                      />
                      Ngưng hoạt động
                    </div>
                  </td>
                )}
                <td
                  className={cx("txtDetail")}
                  onClick={() => {
                    handleChangeDetail(item.id);
                  }}
                >
                  Chi tiết
                </td>
                <td
                  className={cx("txtDetail")}
                  onClick={() => {
                    handleChangeUpdate(item.id);
                  }}
                >
                  Cập nhật
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TableService;
