import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const paymentpage = () => {

  const [value, setValue] = React.useState('Razorpay');

  const handleChange = (event) => {
    setValue(event.target.value);
    
    document.getElementById("PG").value = event.target.value;
  };

  return (
    <div className={styles.ChoosePaymentBox}>
      <div className={styles.ChoosePaymentMethodItem}>
        <div>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Choose Payment method</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <div className={styles.ChooseItemPG}>
                <FormControlLabel value="Razorpay" control={<Radio />} />
                <Image

                  src="https://api.driteducation.com/Storage/img/Razorpay.png"
                  alt="Picture of the author"
                  width={120}
                  height={50}
                />
              </div>
              <div className={styles.ChooseItemPG}>
                <FormControlLabel value="UPI" control={<Radio />} />
                <Image

                  src="https://api.driteducation.com/Storage/img/360-3606562_bhim-logo-bhim-upi.png"
                  alt="Picture of the author"
                  width={120}
                  height={50}
                />
              </div>
             
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <input type="hidden" id="PG" value={value} />
    </div>
  )
}

export default paymentpage
