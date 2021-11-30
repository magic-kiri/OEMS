import React from "react";
import Dialog from "@material-ui/core/Dialog";

type DialogProps = React.ComponentProps<typeof Dialog>;

const MuiDialog = (props: DialogProps) => {
  return <Dialog {...props}></Dialog>;
};

export default MuiDialog;
