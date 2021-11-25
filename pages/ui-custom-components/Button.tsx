import { Button as AntDButton, ButtonProps as AntButtonProps } from "antd";
import "antd/dist/antd.css";
import buttonstyle from "./button.module.css";

type ButtonProps = Partial<
  AntButtonProps & {
    theme: string;
  }
>;

const getButtonClassName = (theme) => {
  switch (theme) {
    case "light":
      return "button-light";
    case "dark":
      return "button-dark";
    case "transparent":
      return "button-transparent";
  }
};

const Button = ({ theme, ...props }: ButtonProps) => {
  const className: string = getButtonClassName(theme);
  return (
    <AntDButton className={buttonstyle[className]} {...props}></AntDButton>
  );
};

export default Button;
