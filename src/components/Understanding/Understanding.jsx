import Header from '../Header/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

function Understanding () {

    const dispatch = useDispatch();

    const [understandingInput, setUnderstandingInput] = useState(1);

    const onClickNext = (evt) => {
        
        // send state to store
        console.log('understanding input is:', understandingInput)
        dispatch({
            type: 'UNDERSTANDING',
            payload: understandingInput
        })
    }

    return (
    <>
    <Header />
    <Typography variant="h5">How well are you understanding the content?</Typography>
    
    {/* contains stars proportionally */}
    <Box
    sx={{
        '& > legend': { mt: 2 },
    }}
    >
    {/* star rating sets state to corresponding number */}
    <Rating
        name="simple-controlled"
        value={understandingInput}
        onChange={(event, newValue) => {
            setUnderstandingInput(newValue);
        }}
    />
    </Box>
        
        {/* text decoration removed underline in linked button */}
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary">
                BACK: Feelings
            </Button>
        </Link>
        <Link to="/support" style={{ textDecoration: 'none' }}>
            <Button variant="contained"
                onClick={onClickNext}>
                NEXT: Support
            </Button>
        </Link>
    </>
    )
}

export default Understanding;