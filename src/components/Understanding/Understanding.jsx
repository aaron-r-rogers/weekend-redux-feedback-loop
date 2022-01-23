import Header from '../Header/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function Understanding () {

    const dispatch = useDispatch();

    const [understandingInput, setUnderstandingInput] = useState('1');

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
    <h2>How well are you understanding the content?</h2>
        <label htmlFor="number">On a scale from 1 to 5:</label>
        <input
            type="number"
            name="number"
            min="1"
            max="5"
            onChange={event => setUnderstandingInput(event.target.value)}
            value={understandingInput}
        />
        <Link to="/support">
            <button onClick={onClickNext}>
                NEXT: Support
            </button>
        </Link>
        <Link to="/">
            <button>
                BACK: Feelings
            </button>
        </Link>
    </>
    )
}

export default Understanding;