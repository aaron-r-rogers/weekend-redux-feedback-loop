import Header from '../Header/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

function Support () {

    const dispatch = useDispatch();

    const [supportInput, setSupportInput] = useState(1);

    const onClickNext = (evt) => {
        
        // send state to store
        console.log('support input is:', supportInput)
        dispatch({
            type: 'SUPPORT',
            payload: supportInput
        })
    }

    return (
        <>
        <Header />
        <Typography variant="h5">How well are you being supported?</Typography>
            {/* contains stars proportionally */}
        <Box
        sx={{
            '& > legend': { mt: 2 },
        }}
        >
        {/* star rating sets state to corresponding number */}
        <Rating
            name="simple-controlled"
            value={supportInput}
            onChange={(event, newValue) => {
                setSupportInput(newValue);
            }}
        />
        </Box>
        {/* text decoration removed underline in linked button */}
        <Link to="/understanding" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary">
                BACK: Understanding
            </Button>
        </Link>
        <Link to="/comments" style={{ textDecoration: 'none' }}>
            <Button variant="contained"
                onClick={onClickNext}>
                NEXT: Comments
            </Button>
        </Link>
        </>
    )
}

export default Support;