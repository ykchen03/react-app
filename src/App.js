import React, { useState} from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, TextField, Button} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import CloseIcon from '@mui/icons-material/Close';
import Search from './database';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [license, setLicense] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleInputChange = (event) => {
    setLicense(event.target.value);
  };

  const handleSearchClick = () => {
    setInput(license);
    setSearchTriggered(true);
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event,reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <CarCrashIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          車輛違規查詢系統
        </Typography>
        <Button color="inherit" onClick={handleClick}>編輯</Button>
      </Toolbar>
    </AppBar>
    <Box component="section" display="flex" justifyContent="center" alignItems="center" sx={{ fontSize: 30, marginTop: 3}}>
      <TextField id="outlined-basic" label="車號" variant="outlined" value={license} onChange={handleInputChange}  sx={{margin: 2}}/>
      <Button variant="contained" sx={{margin: 2}} onClick={handleSearchClick}>搜尋</Button>
    </Box>
    <Box component="section" display="flex" justifyContent="center" alignItems="center" sx={{ fontSize: 30, marginTop: 3}}>
      {searchTriggered && <Search license={input} />}
    </Box>
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="還沒做好"
        action={action}
      />
    </>
  );
}

export default App;
