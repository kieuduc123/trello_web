import React from 'react';
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
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
      borderBottom: '1px solid #000bfa5',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
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
              <Button variant="outlined" startIcon={<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup max={5}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title='DucInter'>
      <Avatar alt="DucInter"  src='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/289339360_829188891381135_4968971814826901530_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrIPDATo4wcl2rtG7o6IbHGJ-MWi1NtSkYn4xaLU21KdQ1f9onnD154GOnUQscTeDqy5ads0gh6caqaoZeBTgt&_nc_ohc=ia2xEJfijk0AX_9wZMe&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAwYHQecFT54lXxJ2AhVFyfT1Iu2dahJIw-JyTsWgnJxA&oe=65F94DAB' />
          </Tooltip>
          <Tooltip title='DucInter'>
      <Avatar alt="DucInter"  src='https://plus.unsplash.com/premium_photo-1676925875785-bf98c2eef3d4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </Tooltip>
          <Tooltip title='DucInter'>
      <Avatar alt="DucInter"  src='https://images.unsplash.com/photo-1554230333-6fee16f4a12b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </Tooltip>
          <Tooltip title='DucInter'>
      <Avatar alt="DucInter"  src='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/289339360_829188891381135_4968971814826901530_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrIPDATo4wcl2rtG7o6IbHGJ-MWi1NtSkYn4xaLU21KdQ1f9onnD154GOnUQscTeDqy5ads0gh6caqaoZeBTgt&_nc_ohc=ia2xEJfijk0AX_9wZMe&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAwYHQecFT54lXxJ2AhVFyfT1Iu2dahJIw-JyTsWgnJxA&oe=65F94DAB' />
          </Tooltip>
          <Tooltip title='DucInter'>
      <Avatar alt="DucInter"  src='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/289339360_829188891381135_4968971814826901530_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrIPDATo4wcl2rtG7o6IbHGJ-MWi1NtSkYn4xaLU21KdQ1f9onnD154GOnUQscTeDqy5ads0gh6caqaoZeBTgt&_nc_ohc=ia2xEJfijk0AX_9wZMe&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAwYHQecFT54lXxJ2AhVFyfT1Iu2dahJIw-JyTsWgnJxA&oe=65F94DAB' />
          </Tooltip>
          <Tooltip title='DucInter'>
      <Avatar alt="DucInter"  src='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/289339360_829188891381135_4968971814826901530_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrIPDATo4wcl2rtG7o6IbHGJ-MWi1NtSkYn4xaLU21KdQ1f9onnD154GOnUQscTeDqy5ads0gh6caqaoZeBTgt&_nc_ohc=ia2xEJfijk0AX_9wZMe&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAwYHQecFT54lXxJ2AhVFyfT1Iu2dahJIw-JyTsWgnJxA&oe=65F94DAB' />
          </Tooltip>
    </AvatarGroup>
       </Box>
      </Box>
  );
};

export default BoardBar;