import React from "react";
import DialogContent from "@material-ui/core/DialogContent";

type DialogContentProps = React.ComponentProps<typeof DialogContent>;

const MuiDialogContent = (props: DialogContentProps) => {
  return <DialogContent {...props}></DialogContent>;
};

export default MuiDialogContent;
