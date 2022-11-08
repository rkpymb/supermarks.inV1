import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const TopTikker = () => {
  return (
      <div className={styles.TopTikker}>
          <Stack sx={{ width: '100%' }} spacing={2}>
              
              <Alert
                  action={
                      <Link href='/Careers'>
                      <Button color="inherit" size="small">
                          Apply
                          </Button>
                      </Link>
                  }
              >
                  <b>We’re hiring</b>  across all disciplines, from operations to engineering.
              </Alert>
          </Stack>
      </div>
  )
}

export default TopTikker