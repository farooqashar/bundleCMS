// @flow

/* -----------------Globals--------------- */
import React, { useState } from 'react';

/* -----------------MaterialUI--------------- */
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
} from '@material-ui/core/';

/* -----------------Child Components--------------- */
import CustomTextField from './textField';

/* -----------------Types--------------- */
type Props = {
  dialogTitle: string,
  prepopulated: string,
  label: string
}

/* -----------------Component--------------- */
const BundleDialog = (props: Props) => {
  const { dialogTitle, prepopulated, label } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Manage
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>

          <CustomTextField
            placeholder={prepopulated}
            name={label}
            label={label}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Delete
          </Button>
          <Button onClick={() => setOpen(false)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BundleDialog;
