import React from 'react';
import { Avatar, AvatarGroup, Box, Chip, Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
const MENU_STYLES = {
   color: 'primary.main',
            bgcolor: 'white',
            border: 'none',
            paddingX: '5px',
            borderRadius: '4px',
            '& .MuiSvgIcon-root': {
              color: 'primary.main'
            },
            '&:hover': {
              bgcolor: 'primary.50'
            }
}
const BoardBar = () => {
  return (
     <Box  sx={{
        width: '100%',
         height: (theme) =>  theme.trello.boarBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      px: 2,
      overflowX: 'auto',
      borderTop: '1px solid #000bfa5',
        
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<DashboardIcon />} label="DucInter" />
        <Chip
          sx={MENU_STYLES}
          clickable icon={<VpnLockIcon />} label="Public/Private Workspace" />
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<AddToDriveIcon />}
          label="Add to dirve" />
        
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<BoltIcon />}
          label="Add to dirve" />
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<FilterListIcon />}
          label="Add to dirve" />
        
          
       </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AvatarGroup max={6}>
          <Tooltip title='DucInter'>
      <Avatar alt="DucInter"  src='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/289339360_829188891381135_4968971814826901530_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrIPDATo4wcl2rtG7o6IbHGJ-MWi1NtSkYn4xaLU21KdQ1f9onnD154GOnUQscTeDqy5ads0gh6caqaoZeBTgt&_nc_ohc=ia2xEJfijk0AX_9wZMe&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAwYHQecFT54lXxJ2AhVFyfT1Iu2dahJIw-JyTsWgnJxA&oe=65F94DAB' />
          </Tooltip>
    </AvatarGroup>
       </Box>
      </Box>
  );
};

export default BoardBar;