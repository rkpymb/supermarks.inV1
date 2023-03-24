import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TestAttemptlist from './TestAttemptlist'
import Leaderboard from './Leaderboard'
import Answerkey from './Answerkey'
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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

export default function AttemptResultTab({ ID, QTitle }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box >
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Attempted" {...a11yProps(0)} />
                    <Tab label="Leaderboard" {...a11yProps(1)} />
                    <Tab label="Answer key" {...a11yProps(2)} />
                 
             
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <TestAttemptlist ID={ID}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Leaderboard ID={ID} QTitle={QTitle} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Answerkey ID={ID} QTitle={QTitle} />
            </TabPanel>
            
        </Box>
    );
}
