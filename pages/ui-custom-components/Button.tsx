import buttonstyle from "./button.module.css";


const getButtonClassName = (theme) => {
  switch(theme) {
    case "light":
      return "button-light";
    case "dark":
      return "button-dark";
    case "transparent":
      return "button-transparent";
  }
};

const Button = ({ theme, ...props }: any) => {
  const className: string = getButtonClassName(theme);
  // return <MuiButton style={{backgroundColor: "#eeeeee", }} {...props}></MuiButton>;
  return <button className={buttonstyle[className]} {...props}></button>;
};

export default Button;
