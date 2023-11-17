import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Drawer from '@mui/material/Drawer';
import Sidebar from './Sidebar'; // Import your Sidebar component

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('Webphone');


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    // Handle additional actions based on the selected option
  };
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            World Performance
          </Typography>
          <Select
            value={selectedOption}
            onChange={handleSelectChange}
            sx={{ marginLeft: 'auto', color: 'white' }}
          >
            <MenuItem value="Webphone">Webphone</MenuItem>
            <MenuItem value="Softphone">Softphone</MenuItem>
          </Select>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer variant="permanent" sx={{ zIndex: (theme) => theme.zIndex.drawer }} >
        <Sidebar />
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: '240px' }}>
        {/* Your main content goes here */}
      </Box>
    </Box>
  );
};

export default Navbar;
