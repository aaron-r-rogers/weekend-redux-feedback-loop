import Header from '../Header/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function Feelings () {

    const dispatch = useDispatch();

    const [feelingsInput, setFeelingsInput] = useState('');

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
    <h2>How are you feeling today?</h2>
        <label htmlFor="number">On a scale from 1 to 5:</label>
        <input
            type="number"
            name="number"
            min="1"
            max="5"
            onChange={event => setFeelingsInput(event.target.value)}
            value={feelingsInput}
        />
        <Link to="/understanding">
            <button 
                onClick={onClickNext}>
                NEXT: Understanding
            </button>
        </Link>
    </>
    )
}

export default Feelings;