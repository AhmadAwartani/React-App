import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" className='btn1'>
     <a href="cart" className="footer__items"><Button variant="contained" >Add To Cart</Button></a> 
    </Stack>
  );
}