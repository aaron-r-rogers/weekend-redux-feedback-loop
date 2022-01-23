import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Confirmation () {

    const dispatch = useDispatch();

    // empties all state from store
    const reset = () => {
        dispatch({
            type: 'RESET'
        })
    }

    return (
        <>
        <Header />
        <Typography variant="h4" gutterBottom={true}>
            Submission success. We appreciate your feedback!
        </Typography>

        <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" onClick={reset}>
                Take a new survey.
            </Button>
        </Link>
        </>
    )
}

export default Confirmation;