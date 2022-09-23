
import styles from '../styles/Home.module.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from 'next/link'
import { useState, useEffect } from 'react'
const Dashboardmenu = () => {
    const [value, setValue] = useState(0);
    const handleChange = (newValue) => {
        setValue(newValue);
        console.log(newValue);
    };
  return (
      <div>
          <Box sx={{ bgcolor: 'background.paper' }}>
              <Tabs
                  value={value}
                 
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
              >
                  
                  <Link href='/Dashboard'>
                      <Tab label="Dashboard" onClick={() => { handleChange(0) }} />
                  </Link>
                 
                  <Link href='/Account'>
                      <Tab label="Account" onClick={() => { handleChange(1) }} />
                  </Link>
                 
                  <Link href='/Dashboard'>
                      <Tab label="My Subscriptions" onClick={() => { handleChange(2) }} />
                  </Link>
                 
                  <Link href='/Account'>
                      <Tab label="My Orders" onClick={() => { handleChange(3) }} />
                  </Link>
                  <Link href='/Dashboard'>
                      <Tab label="My Notes" onClick={() => { handleChange(4) }} />
                  </Link>
                  <Link href='/Account'>
                      <Tab label="My Test" onClick={() => { handleChange(5) }} />
                  </Link>
               
                 
              </Tabs>
          </Box>
    </div>
  )
}

export default Dashboardmenu