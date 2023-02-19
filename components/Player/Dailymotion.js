import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import styles from '../../styles/Home.module.css'
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Dailymotion from 'react-dailymotion';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ VideoITEM }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Play Video
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', padding:'10px'}}>
                    <div>
                        <h3>
                            {VideoITEM.Title}
                       </h3>
                    </div>
                    <div>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                </div>
               </div>
                <Dailymotion
                    video={VideoITEM.URL}
                    uiTheme="dark"
                    autoplay
                    className={styles.dailymotionplayer}
                />
            </Dialog>
        </div>
    );
}
