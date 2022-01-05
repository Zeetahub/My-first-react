import * as React from 'react';
import Divider from '@mui/material/Divider';
import { Basicbutton } from './Ui_components/button';
import {BasicButtonGroup}from './Ui_components/buttongroup';
import {Checkboxes} from './Ui_components/checkbox';
import {FloatingActionButton} from './Ui_components/floatingactionbutton'
export default function App() {
  return (
    <div>
      <h1>Hello Tiger!</h1>
      <p>Button example from MUI</p>
      <Basicbutton />
      <br />
      <Divider />
      <p>ButtonGroup example from MUI</p>
      <BasicButtonGroup />
      <br />
      <br />
      <Divider />
      <p>CheckBox example from MUI</p>
      <Checkboxes/>
      <br />
      <Divider />
      <p>Floatingactionbutton example from MUI</p>
      <FloatingActionButton/>
      <br />
      <Divider />
    </div>
  );
}