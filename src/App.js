import React from "react";
import "./style.css";
import * as React from 'react';
import stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import {basicbutton} from "Ui_components/button";

export default function App() {
  return (
    <div>
      <h1>Hello Tiger!</h1>
      <p>Start editing to see some magic happen :)</p>

      <button type="button">Click</button>
      <basicbutton />
    </div>
  );
}
