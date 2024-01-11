import React from 'react'
import { Button } from '@mui/material';

function ButtonContainer() {
  return (
    <div>
        <Button color='success' sx={{margin: 3}} size='large' variant='contained'
            onClick={() => alert('hello')}
        >
            First
        </Button>
        <Button color='error' sx={{margin: 3}} size='medium' variant='contained'>Second</Button>
        <Button color='info' sx={{margin: 3}} size='small' variant='text'>Third</Button>
    </div>
  )
}

export default ButtonContainer