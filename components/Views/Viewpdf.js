import React,{ useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import styles from '../../styles/Home.module.css'
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ Datapdf }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                view pdf
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                    <div>
                        <h3>
                            {Datapdf.Title}
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
                <iframe height='1000px' width='100%' src={`https://aitechnolog.com/examapp/Storage/panel/pdf/${Datapdf.URL}`} title="title">
                    
                </iframe>
            </Dialog>
        </div>
    );
}
