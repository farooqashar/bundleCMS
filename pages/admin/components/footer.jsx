// @flow

/* -----------------Globals--------------- */
import React, { useState } from 'react';

/* -----------------MaterialUI--------------- */
import {
  Button, Box, DialogActions, Dialog, DialogTitle,
} from '@material-ui/core';

/* -----------------Nextjs--------------- */
import Link from 'next/link';

/* -----------------Types--------------- */
type Props = {
  variant: string,
  dialogTitle: string,
  cancelTitle: string,
  discardTitle: string,
  discardLink: string,
  cancelLink: string,
}

/* -----------------Component--------------- */
const Footer = (props: Props) => {
  const {
    variant, dialogTitle, cancelTitle, discardTitle, discardLink, cancelLink,
  } = props;

  const [deleteStatus, setDeleteStatus] = useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      py={3}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      {deleteStatus ? (
        <Button color="error" onClick={handleClickOpen}>
          {variant}
        </Button>
      ) : null}

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {dialogTitle}
        </DialogTitle>
        <DialogActions>
          <Link href={cancelLink}>
            <Button autoFocus onClick={handleClose} color="primary">
              {cancelTitle}
            </Button>
          </Link>

          <Link href={discardLink}>
            <Button autoFocus onClick={handleClose} color="primary">
              {discardTitle}
            </Button>
          </Link>
        </DialogActions>
      </Dialog>

    </Box>
  );
};

export default Footer;
