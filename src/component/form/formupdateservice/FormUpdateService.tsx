import React, { useState } from "react";
import styles from "./FormUpdateService.module.scss";
import classNames from "classnames/bind";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Input, Select, Checkbox } from "antd";
import type { SelectProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { useDispatch, useSelector } from "react-redux";
import { Service } from "../../../type";
import ServiceSlices from "../../reudux/slices/ServiceSlieces";

const cx = classNames.bind(styles);
const FormUpdateService = () => {
  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };
  const ServiceUpdate = useSelector(
    (state: any) => state.ServiceSlices.Service
  );

  const [service, setService] = useState<Service>({
    name: ServiceUpdate.name,
    id: ServiceUpdate.id,
    ma: ServiceUpdate.ma,
    listRules: ServiceUpdate.listRules,
    des: ServiceUpdate.des,
    stateService: "false",
  });
  const handleCheck = (type: any, checked: any, item: string) => {
    if (checked) {
      switch (type) {
        case "Rules":
          setService({ ...service, listRules: [...service.listRules, item] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "Rules":
          const newGate = service.listRules.filter((e) => e !== item);
          setService({ ...service, listRules: newGate });
          break;
        default:
      }
    }
  };
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(ServiceSlices.actions.updateService(service));
  };
  return (
    <div>
      <div className={cx("wrapFormAdd")}>
        <h6 className={cx("txtFormTitle")}>Thông tin dịch vụ</h6>
        <div className={cx("addForm")}>
          <div className={cx("addLeft")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Mã dịch vụ: :<label style={{ color: "red" }}>*</label>
              </p>
              <Input
                placeholder="Nhập mã dịch vụ"
                style={{ width: "100%" }}
                defaultValue={ServiceUpdate.ma}
                onChange={(e: any) => {
                  setService({ ...service, ma: e.target.value });
                }}
              />
            </div>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Tên dịch vụ ::<label style={{ color: "red" }}>*</label>
              </p>
              <Input
                placeholder="Nhập tên dịch vụ"
                defaultValue={ServiceUpdate.name}
                onChange={(e: any) => {
                  setService({ ...service, name: e.target.value });
                }}
              />
            </div>
          </div>
          <div className={cx("addRight")}>
            <div className={cx("Inputtemp")}>
              <p className={cx("Inputtemptxt")}>
                Mô tả dịch vụ:<label style={{ color: "red" }}>*</label>
              </p>

              <TextArea
                style={{ width: "100%", height: "15vh" }}
                placeholder="Nhập mô tả"
                defaultValue={ServiceUpdate.des}
                onChange={(e: any) => {
                  setService({ ...service, des: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <h6>Quy tắc cấp số</h6>
          <div
            style={{ width: "100%" }}
            // onChange={onChange}
            className={cx("AddCheck")}
          >
            {" "}
            <div className={cx("AddCheckcontent")}>
              <Checkbox
                onChange={(e) => {
                  handleCheck("Rules", e.target.checked, "Tăng tự động");
                }}
                checked={service.listRules.includes("Tăng tự động")}
                className={cx("AddCheckcontent")}
              >
                Tăng tự động từ:
              </Checkbox>
              <h6 className={cx("number")}>0001</h6> đến{" "}
              <h6 className={cx("number")}>9999</h6>
            </div>
            <div className={cx("AddCheckcontent")}>
              <Checkbox
                onChange={(e) => {
                  handleCheck("Rules", e.target.checked, "Prefix");
                }}
                checked={service.listRules.includes("Prefix")}
                className={cx("AddCheckcontent")}
              >
                Prefix:
              </Checkbox>
              <h6 className={cx("number")}>0001</h6>
            </div>
            <div className={cx("AddCheckcontent")}>
              <Checkbox
                onChange={(e) => {
                  handleCheck("Rules", e.target.checked, "Surfix");
                }}
                checked={service.listRules.includes("Surfix")}
                className={cx("AddCheckcontent")}
              >
                Surfix:
              </Checkbox>
              <h6 className={cx("number")}>0001</h6>
            </div>
            <Checkbox
              onChange={(e) => {
                handleCheck("Rules", e.target.checked, "Reset mỗi ngày");
              }}
              checked={service.listRules.includes("Reset mỗi ngày")}
            >
              Reset mỗi ngày
            </Checkbox>
          </div>
        </div>

        <p className={cx("Inputtemptxt")}>
          <label style={{ color: "red" }}>*</label>Là trường thông tin bắt buộc
        </p>
      </div>
      <div className={cx("btn")}>
        <button className={cx("btnCancel")}>Hủy bỏ</button>
        <button className={cx("btnAdd")} onClick={handleUpdate}>
          Cập nhật
        </button>
      </div>
    </div>
  );
};

export default FormUpdateService;
