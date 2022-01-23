import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Confirmation () {

    const dispatch = useDispatch();

    const reset = () => {
        dispatch({
            type: 'RESET'
        })
    }

    return (
    <>
    <Header />
    <h3>Submission success. We appreciate your feedback!</h3>

        <Link to="/">
            <button onClick={reset}>
                Take a new survey.
            </button>
        </Link>
    </>
    )
}

export default Confirmation;