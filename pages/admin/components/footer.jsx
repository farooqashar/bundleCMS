/* -----------------Globals--------------- */
import React, { useState } from "react";

/* -----------------MaterialUI--------------- */
import { Button, Box, DialogActions, Dialog, DialogTitle, DialogContent, Typography} from "@material-ui/core";

/* -----------------Component--------------- */
const Footer = ({ variant, dialogTitle, cancelTitle, discardTitle}) => {
  const [deleteStatus, setDeleteStatus] = useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const deleteItem = () => {
    setDeleteStatus(!deleteStatus);
  };
  return (
    <Box
      py={3}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      {deleteStatus ? (
        <Button color="secondary" onClick={handleClickOpen}>
          {variant}
        </Button>
      ) : null}

<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {dialogTitle}
        </DialogTitle>
        <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
            {cancelTitle}
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            {discardTitle}
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
};

export default Footer;
