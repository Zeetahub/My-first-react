import * as React from 'react';
import Box from 'mui/material/Box';
import Inputlabel from 'mui/material/Inputlabel';
import MenuItem from 'mui/material/MenuItem';
import FromControl from 'mui/material/FromControl';
import Select from 'mui/material/Select';

export function BasicSelect() {
    const [age, setage] = React.useState('');

    const handleChange = (event) => {
        setage(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FromControl fullwidth>
                <Inputlabel  id="demo-simple-select-label">Age</Inputlabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="age"
                 onchange={handlechange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FromControl>
        </Box>
    );
}