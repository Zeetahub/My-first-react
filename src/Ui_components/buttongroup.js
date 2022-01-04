import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function BasicButtonGroup() {
  return (
<buttonGroup variant="contained" aria-label="outlined primary button group">
  <Button>ok1</Button>
  <Button>ok2</Button>
  <Button>ok3</Button>
</buttonGroup>
  );
}