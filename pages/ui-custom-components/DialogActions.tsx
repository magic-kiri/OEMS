import React from "react";
import DialogActions from "@material-ui/core/DialogActions";

type DialogActionsProps = React.ComponentProps<typeof DialogActions>;

const MuiDialogActions = (props: DialogActionsProps) => {
  return <DialogActions {...props}></DialogActions>;
};

export default MuiDialogActions;
