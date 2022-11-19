import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import styles from '../styles/Quizroom.module.css'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PlayQuiz({ Pid, ChapterName }) {
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
                Start Test
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
              
            >
                <AppBar sx={{ position: 'relative' }} className={styles.Nv}>
                    <Toolbar>
                        <div >
                            <img src='/logonew.png' alt='logo' width='80px' />
                        </div>
                        
                    </Toolbar>
                </AppBar>
                <div className={styles.container}>
                    <div className={styles.StartertestBox}>

                        <div>
                            <span style={{ marginLeft: '10px' }}>{Pid} : {ChapterName}</span>
                        </div>

                    </div>


                </div>
            </Dialog>
        </div>
    );
}
