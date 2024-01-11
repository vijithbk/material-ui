import React, { useState } from 'react'
import { TextField, Typography } from '@mui/material'

function TextFields() {
    const [name, setName] = useState()
  return (
    <div>
        <TextField type='text' sx={{ margin: 3 }} placeholder='name' variant='outlined'
            onChange={e => setName(e.target.value)}
        />
        <TextField type='email' sx={{ margin: 3 }} placeholder='Email' variant='standard' />
        <TextField type='password' sx={{ margin: 3 }} placeholder='Password' variant='filled' />

        <Typography sx={{margin: 3}} fontSize={20}>{name}</Typography>
    </div>
  )
}

export default TextFields