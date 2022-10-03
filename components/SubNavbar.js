import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import Dashboardmenu from '../components/Dashboardmenu'
import { FiChevronLeft } from "react-icons/fi";
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';

const SubNavbar = ({ userlogst, userlogData, SetHeader_true }) => {
  const router = useRouter()
  const [loginMobile, setLoginMobile] = useState()
  const [loginName, setLoginName] = useState()
  const [userdp, setDp] = useState()
  const [datashow, setDatashow] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Logoutfuc = () => {
    console.log('Logout Out')
    localStorage.clear();
    router.push('/');
  };
  useEffect(() => {
    // console.log(userlogst)
    if (localStorage.getItem('userid')) {
      // console.log('Logged in')
    } else {

      router.push('/');
    }
    try {

      if (userlogData) {
        // console.log(userlogData)
        setLoginName(userlogData.name)
        setLoginMobile(userlogData.mobile)
        setDp(userlogData.dp)
        setDatashow(true)
      }
    } catch (error) {
      console.error(error)

    }

  }, []);

  return (
    <div className={styles.navbarBox_Sub}>
      <div className={styles.Navbar_Sub}>
        <div className={styles.SubmenuTitleBox}>
          <span className={styles.backBtn}> <FiChevronLeft /></span> <small> Dashboard</small>
         
        </div>
       
        <div className={styles.NavLeft}>
         
          {userlogst && (
            <div>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
               
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                  <Avatar /> My Rewards
                </MenuItem>
                <Divider />
                
                
                <MenuItem onClick={Logoutfuc}>
                  <AiOutlineLogout  />
                  <span style={{marginLeft:'5px'}}> Logout</span>
                </MenuItem>
              </Menu>
           </div>
          )}

        </div>
      </div>
      <div className={styles.Dashboard_Sub}>
        <Dashboardmenu />
      </div>
    </div>
  )
}

export default SubNavbar