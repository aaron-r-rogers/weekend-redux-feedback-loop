import Header from '../Header/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Link } from 'react-router-dom';


function Support () {

    const dispatch = useDispatch();

    const [supportInput, setSupportInput] = useState('');

    const onClickNext = (evt) => {
        
        // send state to store
        console.log('support input is:', supportInput)
        dispatch({
            type: 'SUPPORT',
            payload: supportInput
        })

        // clear inputs
        setSupportInput('');
    }

    return (
    <>
    <Header />
    <h2>How well are you being supported?</h2>
        <label htmlFor="number">On a scale from 1 to 5:</label>
        <input
            type="number"
            name="number"
            min="1"
            max="5"
            onChange={event => setSupportInput(event.target.value)}
            value={supportInput}
        />
        <Link to="/comments">
            <button onClick={onClickNext}>
                NEXT: Comments
            </button>
        </Link>
    </>
    )
}

export default Support;