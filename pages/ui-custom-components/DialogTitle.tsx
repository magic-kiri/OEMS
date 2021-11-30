import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";

type DialogTitleProps = React.ComponentProps<typeof DialogTitle>;

const MuiDialogTitle = (props: DialogTitleProps) => {
  return <DialogTitle {...props}></DialogTitle>;
};

export default MuiDialogTitle;
