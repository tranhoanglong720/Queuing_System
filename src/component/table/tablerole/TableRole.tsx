import React, { useContext } from "react";
import styles from "./TableRole.module.scss";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { Role } from "../../../type";
import { AppContext } from "../../context/AppProvider";
import { useAppDispatch } from "../../reudux/hook";
import { getRole } from "../../reudux/slices/RoleSlices";
const cx = classnames.bind(styles);
type Props = { data: Role[] };
const TableRole = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleChangeDetail = (id: string) => {
    dispatch(getRole(id));
    setTimeout(() => {
      navigate(
        "/managerruleupdate?name=Vai Trò&list=Quản Lý Vai Trò &model=Cập nhật vai trò"
      );
    }, 1000);
  };

  return (
    <Container>
      <div className={cx("wrapListDevice")}>
        <Table striped bordered variant="white">
          <thead className={cx("wrap_Table")}>
            <tr>
              <th>Tên vai trò</th>
              <th>Số người dùng</th>
              <th>Mô tả</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={cx("wrap_Table_body")}>
            {props.data?.map((item: Role, index) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.listFuncA.length + item.listFuncB.length}</td>
                <td>{item.des}</td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => handleChangeDetail(item.id)}
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

export default TableRole;
