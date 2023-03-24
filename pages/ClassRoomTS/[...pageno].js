import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import DbNavbar from '../../components/Parts/DbNavbar'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FiArrowLeft } from "react-icons/fi";
import Chapterlist from '../../components/ClassRoomTS/Chapterlist'
import Button from '@mui/material/Button';
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

const Slug = (props) => {
   
    const router = useRouter();
    const [value, setValue] = React.useState('Chapters');
   
    const [ID, setID] = useState(null);
  
    const [ShowData, setShowData] = useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        setID(router.query.pageno[0])
        setTimeout(() => {
            setShowData(true)
        }, "1000")

    }, [router.query]);


    return <div>
        <DbNavbar />
        <Head>
            <title>TEST ROOM : { ID }</title>
        </Head>
        <div className={styles.Header}>
            <div className={styles.HeaderBox}>
                <div className={styles.HeaderLeft}>
                    <div style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => router.back()}>
                        <FiArrowLeft />
                    </div>
                    <div style={{ marginLeft: '10px', marginTop: '-5px' }}>
                        <span style={{ fontSize: '15px' }}>TEST ROOM : {ID}</span>
                    </div>
                </div>
                <div className={styles.HeaderRight}>
                   
                </div>
            </div>
        </div>
        {ShowData && 
            <div className={styles.container}>
                 <Chapterlist Courseid={ID} />
            </div>
        }
       
    </div>
      
};




export default Slug;