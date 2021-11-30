import React from "react";
import TextField from "@material-ui/core/TextField";

type TextFieldProps = React.ComponentProps<typeof TextField>;

const MuiTextField = (props: TextFieldProps) => {
  return <TextField {...props}></TextField>;
};

export default MuiTextField;
