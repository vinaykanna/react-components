import React from 'react';
import { Box, Typography } from '@material-ui/core';
import moment from 'moment';
import ViewDialog from './ViewDialog';

function Note({ item }) {
  const [open, setOpen] = React.useState(false);
  function onNoteClick() {
    setOpen(true);
  }
  return (
    <>
      <Box
        bgcolor='rgba(92, 92, 92, 0.4)'
        borderRadius='6px'
        p={1}
        m={2}
        onClick={onNoteClick}
        style={{ cursor: 'pointer' }}>
        <Typography variant='caption' style={{ color: '#ffa600' }}>
          {moment(item.date).format('MMM YYYY')}
        </Typography>
        <Typography variant='body1' style={{ color: 'white', paddingTop: 5 }}>
          {item.value.split(' ').slice(0, 10).join(' ')}
        </Typography>
        <Typography variant='caption' style={{ color: 'lightgrey' }}>
          {moment(item.date).format('Do MMMM YYYY, h:mm a')}
        </Typography>
      </Box>
      <ViewDialog open={open} setOpen={setOpen} item={item} />
    </>
  );
}

export default Note;
