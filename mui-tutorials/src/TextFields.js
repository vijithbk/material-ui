import React, { useState } from 'react'
import { TextField, Typography, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material'

function TextFields() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = e => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(inputs)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <TextField type='text' sx={{ margin: 3 }} placeholder='name' variant='outlined'
                name="name"
                value={inputs.name}
                onChange={handleChange}
            />
            <TextField type='email' sx={{ margin: 3 }} placeholder='Email' variant='standard'
                name="email"
                value={inputs.email}
                onChange={handleChange}
            />
            <TextField type='password' sx={{ margin: 3 }} placeholder='Password' variant='filled'
                name="password"
                value={inputs.password}
                onChange={handleChange}
            />

            <Typography sx={{margin: 3}} fontSize={20}>{inputs.name}</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            </FormGroup>
            <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}

export default TextFields