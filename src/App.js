import * as React from 'react';
import Divider from '@mui/material/Divider';
import { Basicbutton } from './Ui_components/button';
import {BasicButtonGroup}from './Ui_components/buttongroup';
export default function App() {
  return (
    <div>
      <h1>Hello Tiger!</h1>
      <p>Button example from MUI</p>
      <Basicbutton />
      <br />
      <Divider />
      <p>Button example from MUI</p>
      <BasicButtonGroup />
      <br/>
      <Divider />
    </div>
  );
}
