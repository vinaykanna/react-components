import React from 'react';
import { Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Search({ setQuery }) {
  return (
    <>
      <Box m={2} position='relative'>
        <input
          type='text'
          autoFocus
          style={{
            width: '90%',
            borderRadius: 24,
            outline: 'none',
            border: 'none',
            background: 'rgba(92, 92, 92, 0.4)',
            height: 50,
            color: 'white',
            paddingLeft: 50,
            paddingRight: 30,
            fontSize: 22,
          }}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchIcon
          style={{
            color: 'white',
            position: 'absolute',
            left: 20,
            top: 16,
          }}
        />
      </Box>
    </>
  );
}

export default Search;
