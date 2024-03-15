import React from 'react';
import { Avatar, Box, Button, IconButton, Tooltip } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Check } from '@mui/icons-material';


const Profiles = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
    <Box>
         <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ padding: 0 }}
            aria-controls={open ? 'basic-menu-profile' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar
            alt='DucKieu'
            src='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/289339360_829188891381135_4968971814826901530_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrIPDATo4wcl2rtG7o6IbHGJ-MWi1NtSkYn4xaLU21KdQ1f9onnD154GOnUQscTeDqy5ads0gh6caqaoZeBTgt&_nc_ohc=ia2xEJfijk0AX_9wZMe&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAwYHQecFT54lXxJ2AhVFyfT1Iu2dahJIw-JyTsWgnJxA&oe=65F94DAB'
            
            sx={{ width: 30, height: 30 }}/>
          </IconButton>
        </Tooltip>
      <Menu
        id="basic-menu-profile"
        aria-labelledby="basic-button-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
   <MenuItem onClick={handleClose}>
            <Avatar sx={{
              width: 28,
            height: 28, mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Profiles;