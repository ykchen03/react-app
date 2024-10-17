import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, TextField, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Search from './database';
import './App.css';

function App() {
  const [license, setLicense] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleInputChange = (event) => {
    setLicense(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchTriggered(true);
  };
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        車輛違規查詢系統
        </Typography>
        <Button color="inherit">登入</Button>
      </Toolbar>
    </AppBar>
    <Box component="section" display="flex" justifyContent="center" alignItems="center" sx={{ fontSize: 30, marginTop: 3}}>
      <TextField id="outlined-basic" label="車號" variant="outlined" value={license} onChange={handleInputChange}  sx={{margin: 2}}/>
      <Button variant="contained" sx={{margin: 2}} onClick={handleSearchClick}>搜尋</Button>
    </Box>
    {searchTriggered && <Search license={license} />}
    </>
  );
}

export default App;
