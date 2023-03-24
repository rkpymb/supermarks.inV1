import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import DbNavbar from '../components/Parts/DbNavbar'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FiArrowLeft } from "react-icons/fi";
import Attemptlist from '../components/ResultPage/Attemptlist'
import AttemptlistTS from '../components/ResultPage/AttemptlistTS'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TestResults = (props) => {

  const router = useRouter();
  const [value, setValue] = React.useState('Chapters');

  const [ID, setID] = useState(null);

  const [ShowData, setShowData] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    try {
      if (localStorage.getItem('userid')) {
        const usermobnow = localStorage.getItem('userid');
        const userid = { usermobnow }
        setID(userid)
        setTimeout(() => {
          setShowData(true)
        }, "1000")
        
      } else {

      }
    } catch (error) {
      console.error(error)


    }
    // check login credential end

  }, [router.query]);


  return <div>
    <DbNavbar />
    <Head>
      <title>My Attempts & Results</title>
    </Head>
    <div className={styles.Header}>
      <div className={styles.HeaderBox}>
        <div className={styles.HeaderLeft}>
          <div style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => router.back()}>
            <FiArrowLeft />
          </div>
          <div style={{ marginLeft: '10px', marginTop: '-5px' }}>
            <span style={{ fontSize: '15px' }}>My Attempts & Results</span>
          </div>
        </div>
        <div className={styles.HeaderRight}>

        </div>
      </div>
    </div>
    {ShowData &&
      <div className={styles.container}>
        <Box sx={{ width: '100%' }}>
          <Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" scrollButtons="auto">
              <Tab label="Course Test" value="Chapters" />
              <Tab label="Test Series" value="Chapters2" />
            </Tabs>
          </Box>
          <TabPanel value={value} index='Chapters'>
            <Attemptlist UserMob={ID} />
          </TabPanel>
          <TabPanel value={value} index='Chapters2'>
            <AttemptlistTS UserMob={ID} />
          </TabPanel>
        </Box>
      </div>
    }

  </div>

};




export default TestResults;