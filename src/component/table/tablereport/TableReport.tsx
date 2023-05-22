import React from "react";
import styles from "./TableReport.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { Level } from "../../../type";
const cx = classnames.bind(styles);
type Props = { data: Level[] };
const TableReport = (props: Props) => {
  const navigate = useNavigate();
  const handleChangeDetail = () => {
    navigate(
      "/leveldetail?name=Cấp số&list=Danh sách cấp số&model=Chi tiết cấp số"
    );
  };

  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <Table striped bordered variant="white">
          <thead className={cx("wrap_Table")}>
            <tr>
              <th>Số thứ tự</th>
              <th>Tên dịch vụ</th>
              <th>Thời gian cấp</th>
              <th>Tình trạng</th>
              <th>Nguồn cấp</th>
            </tr>
          </thead>
          <tbody className={cx("wrap_Table_body")}>
            {props.data?.map((item: Level, index) => (
              <tr key={item.id}>
                <td>{item.STT}</td>
                <td>{item.namedv}</td>
                <td>{item.dateCreate}</td>
                {item.stateLevel === "Đang sử dụng" ? (
                  <td>
                    <div>
                      <img
                        src={require("../../../assent/xanh.png")}
                        style={{ marginBottom: 5, marginRight: 2 }}
                      />
                      Đang sử dụng
                    </div>
                  </td>
                ) : (
                  <td>
                    <div>
                      <img
                        src={require("../../../assent/do.png")}
                        style={{ marginBottom: 5, marginRight: 2 }}
                      />
                      Bỏ qua
                    </div>
                  </td>
                )}

                <td>{item.source}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TableReport;
