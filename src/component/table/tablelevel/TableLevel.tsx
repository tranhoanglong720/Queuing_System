import React from "react";
import styles from "./TableLevel.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { Level } from "../../../type";
const cx = classnames.bind(styles);
type Props = { data: Level[] };
const TableLevel = (props: Props) => {
  const navigate = useNavigate();
  const handleChangeDetail = () => {
    navigate(
      "/leveldetail?name=Cấp số&list=Danh sách cấp số&model=Chi tiết cấp số"
    );
  };
  console.log(props.data);
  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <Table striped bordered variant="white">
          <thead className={cx("wrap_Table")}>
            <tr>
              <th>STT</th>
              <th>Tên khách hàng</th>
              <th>Tên dịch vụ</th>
              <th>Thời gian cấp</th>
              <th>Hạn sử dụng</th>
              <th>Trạng thái</th>
              <th>Nguồn cấp</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={cx("wrap_Table_body")}>
            {props.data?.map((item: Level, index) => (
              <tr key={item.id}>
                <td>{item.STT}</td>
                <td>{item.customer}</td>
                <td>{item.namedv}</td>
                <td>{item.dateCreate}</td>
                <td>{item.experDate}</td>
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
                <td onClick={handleChangeDetail} className={cx("txtDetail")}>
                  Chi tiết
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TableLevel;
