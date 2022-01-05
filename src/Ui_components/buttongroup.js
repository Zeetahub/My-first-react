import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export function BasicButtonGroup() {
  return (
<ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>ok1</Button>
  <Button>ok2</Button>
  <Button>ok3</Button>
</ButtonGroup>
  );
}