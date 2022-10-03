import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../styles/Home.module.css'
import { FiChevronRight } from 'react-icons/fi';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const [open, setOpen] = useState(false);
    const handleOpenEnq = () => {
        
        setOpen(true);
    }
    const handleCloseEnq = () => {
       
        setOpen(false);
    }
   
    return (
        <div>
            <div className={styles.Btn_icon} style={{ backgroundColor: '#08bd80' }} onClick={handleOpenEnq}>
                <small>Procced to Book</small>
                <span><FiChevronRight /></span>
            </div>
            <Modal
                open={open}
                onClose={handleCloseEnq}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}