import React from "react";
import styles from "./FormDeatailService.module.scss";
import classNames from "classnames/bind";
import FilterService from "../../filter/filterservice/FilterDevice";
import { Container, Row, Table, Col } from "react-bootstrap";
import FilterServiceDetail from "../../filter/filterservicedetail/FilterServiceDetail";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const FormDetailService = () => {
  const navigate = useNavigate();
  const handleChangeUpdate = () => {
    navigate(
      "/serviceupdate?name=Dịch vụ&list=Danh sách dịch vụ&model=Cập nhật dịch vụ"
    );
  };
  const handleChangeBack = () => {
    navigate("/service?name=Dịch vụ&list=Danh sách dịch vụ");
  };
  const ServiceDetail = useSelector(
    (state: any) => state.ServiceSlices.Service
  );

  return (
    <div>
      <Container className={cx("formserviceDetail")}>
        <Row>
          <Col lg={4}>
            <div className={cx("detailServiceLeft")}>
              <h6 className={cx("txtFormTitle")}>Thông tin dịch vụ</h6>
              <div className={cx("serviceleft")}>
                <label className={cx("lblMa")}>Mã dịch vụ: </label>
                <label className={cx("txtMa")}>{ServiceDetail.ma}</label>
              </div>
              <div className={cx("serviceleft")}>
                <label className={cx("lblMa")}>Tên dịch vụ:</label>
                <label className={cx("txtMa")}>{ServiceDetail.name}</label>
              </div>
              <div className={cx("serviceleft")}>
                <label className={cx("lblMa")}>Mô tả: </label>
                <label className={cx("txtMa")}>{ServiceDetail.des}</label>
              </div>

              <h6 className={cx("txtFormTitle")}>Quy tắc cấp số</h6>
              {ServiceDetail?.listRules?.map((item: string) => (
                <>
                  {item === "Tăng tự động" ? (
                    <>
                      <div className={cx("serviceleft")}>
                        <label className={cx("lblMa")}>Tăng tự động: </label>
                        <label className={cx("txtMa")}>0001 đến 9999</label>
                      </div>
                    </>
                  ) : null}
                  {item === "Prefix" ? (
                    <>
                      <div className={cx("serviceleft")}>
                        <label className={cx("lblMa")}>Prefix: </label>
                        <label className={cx("txtMa")}>0001</label>
                      </div>
                    </>
                  ) : null}
                  {item === "Surfix" ? (
                    <>
                      <div className={cx("serviceleft")}>
                        <label className={cx("lblMa")}>Surfix </label>
                        <label className={cx("txtMa")}>0001</label>
                      </div>
                    </>
                  ) : null}
                  {item === "Reset mỗi ngày" ? (
                    <>
                      <div className={cx("serviceleft")}>
                        <label className={cx("lblMa")}>Reset mỗi ngày: </label>
                        <label className={cx("txtMa")}>0001</label>
                      </div>
                    </>
                  ) : null}
                </>
              ))}
            </div>
          </Col>
          <Col lg={7}>
            {" "}
            <div className={cx("detailServiceRight")}>
              <FilterServiceDetail />
              <Table className={cx("wrap")}>
                <thead className={cx("wrap_Table")}>
                  <tr>
                    <th>STT</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody className={cx("wrap_Table_body")}>
                  <tr>
                    <td>2010001</td>
                    <td>
                      {" "}
                      <div>
                        <img
                          src={require("../../../assent/xanh.png")}
                          style={{ marginBottom: 5, marginRight: 2 }}
                        />
                        Đã hoàn thành
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col lg={1}>
            <div className={cx("wrapEdit")} onClick={handleChangeUpdate}>
              <img
                src={require("../../../assent/Edit Square.png")}
                style={{ width: "50%" }}
              />
              <h6 className={cx("txtEdit")}>Cập nhật danh sách</h6>
            </div>
            <div className={cx("wrapBack")} onClick={handleChangeBack}>
              <img
                src={require("../../../assent/back-square.png")}
                style={{ width: "50%" }}
              />
              <h6 className={cx("txtEdit")}>Quay lại</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormDetailService;
