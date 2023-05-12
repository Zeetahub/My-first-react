import * as React from 'react';
import Divider from '@mui/material/Divider';
import { Basicbutton } from './Ui_components/button';
import {BasicButtonGroup}from './Ui_components/buttongroup';
import {Checkboxes} from './Ui_components/checkbox';
import {FloatingActionButton} from './Ui_components/floatingactionbutton'
import {RowRadioButtongroup} from './Ui_components/radiobutton'
import { BasicRating } from './Ui_components/rating'
import { BasicSelect } from './Ui_components/select'
import { SliderSizes } from './Ui_components/Slider'
import { BasicSwitches } from './Ui_components/Switch';
import { BasicTextFields } from './Ui_components/TextField';
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
      <p>RowRadioButtongroup example from MUI</p>
      <RowRadioButtongroup/>
      <br />
      <Divider />
      <br />
      <BasicRating  />
      <br />
      <Divider />
      <br />
      <BasicSelect />
      <br />
      <Divider />
      <br />
      <SliderSizes />
      <br />
      <Divider />
      <br />
      <BasicSwitches />
      <br />
      <Divider />
      <br />
      <BasicTextFields />


      
    </div>
  );
}