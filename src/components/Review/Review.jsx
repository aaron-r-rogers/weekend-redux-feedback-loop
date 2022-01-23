import Header from '../Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Review () {

    const dispatch = useDispatch();

    const feelings = useSelector(store => store.feelingsReducer)
    const understanding = useSelector(store => store.understandingReducer)
    const support = useSelector(store => store.supportReducer)
    const comments = useSelector(store => store.commentsReducer)

    const onSubmit = () => {

        // sends state to database as new row
        axios.post('/review', {
            feeling: feelings,
            understanding: understanding,
            support: support,
            comments: comments,
        }).then(res => {
            console.log('POST /feedback successful', res);
        })
        .catch (err => {
            console.error('Error in POST /feedback', err)
        })
    }

    // empties all state from store
    const reset = () => {
        dispatch({
            type: 'RESET'
        })
    }

    return (
    <>
    <Header />
    <Box sx={{ m: 4 }}>
    <Typography variant="h5">Review Your Feedback</Typography>
        <Typography variant="h6">Feelings: 
            <Typography variant="body1">{feelings}</Typography>
        </Typography>
        <Typography variant="h6">Understanding: 
            <Typography variant="body1">{understanding}</Typography>
        </Typography>
        <Typography variant="h6">Support: 
            <Typography variant="body1">{support}</Typography>
        </Typography>
        <Typography variant="h6">Comments: 
            <Typography variant="body1">{comments}</Typography>
        </Typography>
        </Box>

        <Link to="/comments" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary">
            BACK: Comments
            </Button>
        </Link>
        <Link to="/confirmation" style={{ textDecoration: 'none' }}>
            <Button variant="contained" onClick={onSubmit}>
                SUBMIT
            </Button>
        </Link>
        <br></br>
        <Link to="/comments" style={{ textDecoration: 'none' }}>
            <Button 
            variant="contained" 
            color="warning"
            onClick={reset}>
                Start Over
            </Button>
        </Link>
    </>
    )
}

export default Review;