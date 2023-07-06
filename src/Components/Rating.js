import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSIze({rating}) {
  return (
    <Stack className='stars'>
      <Rating name="size-medium" defaultValue={rating} />
    </Stack>
  );
}