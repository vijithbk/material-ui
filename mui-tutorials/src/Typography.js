import React from 'react'
import { Typography } from '@mui/material';

const Test = () => {
  return (
    <div>
        <Typography
            border={"1px solid gray"} variant='h5' fontFamily={"Times"}
            sx={{border: '1px solid red', borderRadius: 10, padding: '30px', margin: '10px'}}
        >
            Sample text
        </Typography>
    </div>
  )
}

export default Test