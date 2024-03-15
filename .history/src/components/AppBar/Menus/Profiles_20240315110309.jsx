import React from 'react';
import { Avatar, Box, Button } from '@mui/material';
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
        <Button
          sx={{padding: 0}}
        id="basic-button-profile"
        aria-controls={open ? 'basic-menu-profile' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
      >
          <Avatar
            alt='DucKieu'
            src='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/289339360_829188891381135_4968971814826901530_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrIPDATo4wcl2rtG7o6IbHGJ-MWi1NtSkYn4xaLU21KdQ1f9onnD154GOnUQscTeDqy5ads0gh6caqaoZeBTgt&_nc_ohc=ia2xEJfijk0AX_9wZMe&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAwYHQecFT54lXxJ2AhVFyfT1Iu2dahJIw-JyTsWgnJxA&oe=65F94DAB'
            
            sx={{ width: 30, height: 30 }}/>
      </Button>
      <Menu
        id="basic-menu-profile"
        aria-labelledby="basic-button-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
      <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Profiles;