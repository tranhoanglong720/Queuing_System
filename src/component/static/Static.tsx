import React from "react";
import styles from "./Static.module.scss";
import classNames from "classnames/bind";
import { type } from "os";

const cx = classNames.bind(styles);
type Props = { data: any };
const Static = (props: Props) => {
  return (
    <div className={cx("wrapStatic")}>
      <div className={cx("title")}>
        <img src={props.data.img} />
        <p
          style={{
            marginBottom: 0,
            marginLeft: 15,
            textAlign: "left",
            width: 80,
          }}
        >
          {props.data.name}
        </p>
      </div>
      <div className={cx("info")}>
        <h3 className={cx("txtQuantity")}>{props.data.quantity}</h3>
        <div>
          <p className={cx("txtPercent")}>{props.data.percent}</p>
        </div>
      </div>
    </div>
  );
};

export default Static;
