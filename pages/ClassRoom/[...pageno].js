import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import ClassRoomNav from '../../components/Parts/ClassRoomNav'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FiArrowLeft } from "react-icons/fi";
import Chapterlist from '../../components/ClassRoom/Chapterlist'
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        console.log(props.ID)


    }, []);


    return <div>
        <ClassRoomNav />
        <Head>
            <title>ClassRoom : { props.ID }</title>
        </Head>
        <div className={styles.Header}>
            <div className={styles.HeaderBox}>
                <div className={styles.HeaderLeft}>
                    <div style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => router.back()}>
                        <FiArrowLeft />
                    </div>
                    <div style={{ marginLeft: '10px', marginTop: '-5px' }}>
                        <span style={{ fontSize: '15px' }}>CLASSROOM : {props.ID}</span>
                    </div>
                </div>
                <div className={styles.HeaderRight}>

                </div>
            </div>
        </div>
        
        <div className={styles.container}>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                       
                        <Tab label="Course Chapters" value="Chapters" />
                        <Tab label="Doubts Forum" value="Forum" />

                    </Tabs>
                </Box>
               
                <TabPanel value={value} index='Chapters'>
                    <Chapterlist Courseid={props.ID} />
                </TabPanel>
                <TabPanel value={value} index='Forum'>
                 Doubts Forum
                </TabPanel>

            </Box>
        </div>
    </div>
      
};

export async function getServerSideProps(context) {
    // console.log(ID)
    const ID = context.query.pageno[0];
    return {
        props: { ID }, // will be passed to the page component as props
    }
}


export default Slug;