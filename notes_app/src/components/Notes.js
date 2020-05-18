import React from 'react';
import { Box, Fab, CircularProgress } from '@material-ui/core';
import CreateNoteDialog from './CreateNoteDialog';
import AddIcon from '@material-ui/icons/Add';
import Search from './Search';
import CategoryTabs from './CategoryTabs';
import { notesRef } from '../firebase';

function Notes() {
  const [notes, setNotes] = React.useState([]);

  const [note, setNote] = React.useState({
    value: '',
    hasError: false,
  });

  const [category, setCategory] = React.useState({
    category: '',
    hasError: false,
  });

  const [open, setOpen] = React.useState(false);

  const [query, setQuery] = React.useState('');

  async function createNote() {
    if (!note.value) {
      setNote({
        value: '',
        category: '',
        hasError: true,
      });
    }
    if (!category.value) {
      setCategory({
        category: '',
        hasError: true,
      });
    } else {
      notesRef.push().set({
        value: note.value,
        category: category.value,
        date: new Date().toString(),
      });
      setOpen(false);
      setNote({
        value: '',
        hasError: false,
      });
      setCategory({
        value: '',
        hasError: false,
      });
    }
  }

  React.useEffect(() => {
    notesRef.on('value', (snapshot) => {
      snapshotToArray(snapshot);
    });
  }, []);

  function snapshotToArray(snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });
    setNotes(returnArr);
  }

  return (
    <>
      <Search setQuery={setQuery} />
      {!notes.length ? (
        <CircularProgress />
      ) : (
        <CategoryTabs
          notes={notes.filter(
            (item) => item.value.indexOf(query.toLowerCase()) !== -1
          )}
        />
      )}

      <CreateNoteDialog
        open={open}
        setOpen={(v) => setOpen(v)}
        note={note}
        setNote={setNote}
        category={category}
        setCategory={setCategory}
        createNote={createNote}
      />
      <Box position='fixed' bottom='20px' right='20px'>
        <Fab
          onClick={() => setOpen(true)}
          style={{ background: '#ffa600', color: 'white' }}
          aria-label='add'>
          <AddIcon />
        </Fab>
      </Box>
    </>
  );
}

export default Notes;
