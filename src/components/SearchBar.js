import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery, fetchPeople } from '../store/features/peopleSlice';
import { TextField, Grid, Button } from '@mui/material';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchQuery(input));
    dispatch(fetchPeople());
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }} p={2}>
      <Grid item>
        <TextField
          variant="outlined"
          label="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width:"25vw",marginRight: '10px', textAlign: 'center', borderRadius: '20px' }} 
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleSearch} style={{ borderRadius: '20px' }}>Search</Button> {/* Add color and border radius */}
      </Grid>
    </Grid>
  );
};

export default SearchBar;
