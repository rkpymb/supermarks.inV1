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
import Videolist from '../../components/ClassRoom/Videolist'
import LiveSession from '../../components/ClassRoom/LiveSession'
import TestSeries from '../../components/ClassRoom/TestSeries'
import Pdflist from '../../components/ClassRoom/Pdflist'
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
    const [value, setValue] = React.useState('VideoLectures');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        console.log(props.ID)
       


    }, []);


    return <div>
        <ClassRoomNav />
        <Head>
            <title>Chapter : {props.ChapterTitle} / {props.CourseID}</title>
        </Head>
        <div className={styles.Header}>
            <div className={styles.HeaderBox}>
                <div className={styles.HeaderLeft}>
                    <div style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => router.back()}>
                        <FiArrowLeft />
                    </div>
                    <div style={{ marginLeft: '10px', marginTop: '-5px' }}>
                        <span style={{ fontSize: '15px' }}>{props.ChapterTitle} ({props.CourseID}) </span>
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
                        <Tab label="Video Lectures" value="VideoLectures" />
                        <Tab label="Live Sessions" value="LiveSessions" />
                        <Tab label="Test Series" value="TestSeries" />
                        <Tab label="Pdf Notes" value="PdfNotes" />
                    </Tabs>
                </Box>
               
                <TabPanel value={value} index='VideoLectures'>
                    <Videolist ChapterID={props.ID} />
                </TabPanel>
                <TabPanel value={value} index='LiveSessions'>
                    <LiveSession ChapterID={props.ID} />
                </TabPanel>
                <TabPanel value={value} index='TestSeries'>
                    <TestSeries ChapterID={props.ID} />
                </TabPanel>
                <TabPanel value={value} index='PdfNotes'>
                    <Pdflist ChapterID={props.ID} />
                </TabPanel>

            </Box>
        </div>
    </div>
      
};

export async function getServerSideProps(context) {
    // console.log(ID)
    const ID = context.query.pageno[0];
    const CourseID = context.query.pageno[1];
    const ChapterTitle = context.query.pageno[2];
    return {
        props: { ID, CourseID, ChapterTitle }, // will be passed to the page component as props
    }
}


export default Slug;