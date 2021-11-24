import { Button as AntDButton, ButtonProps } from "antd";
import "antd/dist/antd.css";
import buttstyle from "./button.module.css";

const Button = (props: ButtonProps) => {
  return <AntDButton className={buttstyle.button} {...props}></AntDButton>;
};

export default Button;
