import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from '@material-ui/core';
import moment from 'moment';
import { notesRef } from '../firebase';

function ViewDialog({ open, setOpen, item }) {
  function onDelete() {
    notesRef.child(item.key).remove();
    setOpen(false);
  }
  return (
    <>
      <Dialog open={open} fullWidth maxWidth='sm'>
        <DialogContent>
          <Typography variant='caption' style={{ color: '#ffa600' }}>
            {moment(item.date).format('Do MMMM YYYY, h:mm a')}
          </Typography>
          <Typography variant='body1' style={{ paddingTop: 5 }}>
            {item.value}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            size='small'
            variant='outlined'
            onClick={() => setOpen(false)}
            style={{ border: '1px solid #ffa600' }}>
            Cancel
          </Button>
          <Button
            size='small'
            variant='outlined'
            onClick={onDelete}
            style={{ border: '1px solid #ffa600' }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ViewDialog;
