import React, { createContext } from 'react';
import './App.css';
import { Container, Box } from '@material-ui/core';
import Notes from './components/Notes';

export const Context = createContext('');

function App() {
  const [selectedNote, setSelectedNote] = React.useState(null);
  return (
    <>
      <Context.Provider
        value={{
          selectedNote: selectedNote,
          setSelectedNote: (v) => setSelectedNote(v),
        }}>
        <Container maxWidth='md'>
          <Box
            bgcolor='black'
            position='relative'
            width='100%'
            height='100vh'
            overflow='auto'>
            <h1 className='heading'>Notes</h1>
            <Notes />
          </Box>
        </Container>
      </Context.Provider>
    </>
  );
}

export default App;
