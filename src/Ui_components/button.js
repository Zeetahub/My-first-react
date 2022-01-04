import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function Basicbutton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">text</Button>
      <Button variant="contained" size="large">
        clickhere
      </Button>
      <Button variant="outlined">geedfds</Button>
    </Stack>
  );
}
