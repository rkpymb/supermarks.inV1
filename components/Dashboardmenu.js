
import styles from '../styles/Home.module.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'
const Dashboardmenu = () => {
    const router = useRouter()
    const [value, setValue] = useState(0);
    const handleChange = (newValue) => {
        if (newValue !== value) {
            setValue(newValue);
            console.log(newValue);
            if (newValue == 0) {
                router.push('/Dashboard')
            }
            else if (newValue == 1) {
                router.push('/Mytest')
            }
            else if (newValue == 2) {
                router.push('/MyAttempts')
            }
            else if (newValue == 3) {
                router.push('/MyOrders')
            }
            else if (newValue == 4) {
                router.push('/MyAccount')
            }
        }
      
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
                      <Tab label="Dashboard" onClick={() => { handleChange(0) }} />
                      <Tab label="My Tests" onClick={() => { handleChange(1) }} />
                      <Tab label="My Attempts" onClick={() => { handleChange(2) }} />
                      <Tab label="My Orders" onClick={() => { handleChange(3) }} />
                      <Tab label="My Account" onClick={() => { handleChange(4) }} />
              </Tabs>
          </Box>
    </div>
  )
}

export default Dashboardmenu