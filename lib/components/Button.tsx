import { Button as AntDButton, ButtonProps } from "antd";
import "antd/dist/antd.css";

const Button = (props: ButtonProps) => {
  console.log("Pressed!");
  console.log(props);
  return <AntDButton {...props}></AntDButton>;
};

export default Button;
