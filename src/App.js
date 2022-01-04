import * as React from 'react';
import Divider from '@mui/material/Divider';
import { Basicbutton } from './Ui_components/button';

export default function App() {
  return (
    <div>
      <h1>Hello Tiger!</h1>
      <p>Button example from MUI</p>
      <Basicbutton />
      <br />
      <Divider />
    </div>
  );
}
