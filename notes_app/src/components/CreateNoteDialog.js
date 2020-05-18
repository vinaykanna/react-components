import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
  Button,
  FormHelperText,
  MenuItem,
  Box,
} from '@material-ui/core';

function CreateNoteDialog({
  open,
  setOpen,
  note,
  setNote,
  category,
  setCategory,
  createNote,
}) {
  return (
    <>
      <Dialog open={open} fullWidth maxWidth='sm'>
        <DialogTitle>Create Note</DialogTitle>
        <DialogContent>
          <TextField
            label='Select Category'
            select
            error={category.hasError}
            helperText={category.hasError ? 'Select category' : null}
            value={category.value}
            onChange={(e) => setCategory({ value: e.target.value })}
            style={{ minWidth: 200 }}>
            <MenuItem value='personal'>Personal</MenuItem>
            <MenuItem value='office'>Office</MenuItem>
          </TextField>
          <Box mt={5}>
            <TextField
              label='Note'
              value={note.value}
              onChange={(e) => setNote({ value: e.target.value })}
              fullWidth
              error={note.hasError}
              helperText={note.hasError ? 'Please enter some text.' : null}
              multiline
            />
            <FormHelperText>
              {!note.hasError ? 'Please press enter for the next line.' : null}
            </FormHelperText>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            onClick={() => {
              setOpen(false);
              setNote({
                value: '',
              });
            }}
            style={{
              background: '#ffa600',
              color: 'white',
              fontWeight: 'bold',
            }}>
            Cancel
          </Button>
          <Button
            variant='contained'
            onClick={createNote}
            style={{
              background: '#ffa600',
              color: 'white',
              fontWeight: 'bold',
            }}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CreateNoteDialog;
