import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DraftsIcon from "@mui/icons-material/Drafts";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ArticleIcon from "@mui/icons-material/Article";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import {
  Box,
  FormLabel,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: "white",
        flex: "1",
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box sx={{position:"fixed " ,maxHeight: 500, maxWidth: 500 ,  overflow: 'auto'}} >
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon> 
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="pages" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="Group" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText primary="Freinds" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
          <SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
         <AccountBoxIcon/>
          </ListItemIcon>
          <ListItemText primary="profile" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
           <Brightness2Icon/>
          </ListItemIcon>
          <Switch {...FormLabel} />
        </ListItemButton>
      </ListItem>
      {/*  */}
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon> 
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="pages" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="Group" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText primary="Freinds" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
          <SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
         <AccountBoxIcon/>
          </ListItemIcon>
          <ListItemText primary="profile" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton alignItems="center">
          <ListItemIcon>
           <Brightness2Icon/>
          </ListItemIcon>
          <Switch {...FormLabel} />
        </ListItemButton>
      </ListItem>
      </Box>
    </Box>
  );
};

export default Sidebar;
