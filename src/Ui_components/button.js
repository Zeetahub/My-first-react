import * as React from 'react';
import stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function basicbutton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">text</Button>
      <Button variant="contained" color="contained" size="large">clickhere</Button>
      <Button variant="outlined">geedfds</Button>
    </Stack>
  );
}