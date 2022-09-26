import React from 'react';
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './components/SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon />

            <SidebarOption active icon={<HomeIcon />} text="Home"/>
            <SidebarOption icon={<TagIcon />} text="Explore"/>
            <SidebarOption icon={<NotificationsIcon />} text="Notifications"/>
            <SidebarOption icon={<MailOutlineIcon />} text="Messages"/>
            <SidebarOption icon={<BookmarkBorderIcon />} text="Bookmarks"/>
            <SidebarOption icon={<ListAltIcon />} text="Lists"/>
            <SidebarOption icon={<PermIdentityIcon />} text="Profile"/>
            <SidebarOption icon={<MoreHorizIcon />} text="More"/>

            <Button variant="outlined" className="sidebar__tweet" fullWidth >Tweet</Button>
        </div>
    );
}

export default Sidebar;
