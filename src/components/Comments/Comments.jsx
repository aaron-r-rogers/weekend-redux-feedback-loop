import Header from '../Header/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Comments () {

    const dispatch = useDispatch();

    const [commentsInput, setCommentsInput] = useState('');

    const onClickNext = (evt) => {
        
        // send state to store
        console.log('comments input is:', commentsInput)
        dispatch({
            type: 'COMMENTS',
            payload: commentsInput
        })
    }

    return (
    <>
    <Header />
    <Typography variant="h5">Would you like to add any comments?</Typography>
    <TextField
        id="filled-multiline-static"
        label="We'd love to hear from you."
        multiline
        rows={4}
        style = {{width: 500}}
        onChange={event => setCommentsInput(event.target.value)}
        value={commentsInput}
        variant="filled"
        autoFocus={true}
        margin='normal'
        />
        <br></br>
        <Link to="/support" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary">
                BACK: Support
            </Button>
        </Link>
        <Link to="/review" style={{ textDecoration: 'none' }}>
            <Button variant="contained" onClick={onClickNext}>
                NEXT: Review
            </Button>
        </Link>
    </>
    )
}

export default Comments;