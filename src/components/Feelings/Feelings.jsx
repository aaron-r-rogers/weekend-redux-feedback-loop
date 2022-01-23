import Header from '../Header/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

function Feelings () {

    const dispatch = useDispatch();

    const [feelingsInput, setFeelingsInput] = useState(1);

    const onClickNext = (evt) => {
        
        // send state to store
        console.log('feelings input is:', feelingsInput)
        dispatch({
            type: 'FEELINGS',
            payload: feelingsInput
        })
    }

    return (
    <>
    <Header />
    <Typography variant="h5">How are you feeling today?</Typography>

    <Box
    sx={{
        '& > legend': { mt: 2 },
    }}
    >
    <Rating
        name="simple-controlled"
        value={feelingsInput}
        onChange={(event, newValue) => {
            setFeelingsInput(newValue);
        }}
    />
    </Box>
            
        {/* text decoration removed underline in linked button */}
        <Link to="/understanding" style={{ textDecoration: 'none' }}>
            <Button variant="contained" 
                onClick={onClickNext}>
                NEXT: Understanding
            </Button>
        </Link>
    </>
    )
}

export default Feelings;