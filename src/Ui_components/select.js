import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function BasicSelect() { 
    const [age, setAge] = React.useState('');

    const HandleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullwidth>
                <InputLabel  id="demo-simple-select-label">Age</InputLabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="age"
                 onchange={HandleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}