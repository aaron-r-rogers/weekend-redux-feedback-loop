import Header from '../Header/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


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

        // clear inputs
        setCommentsInput('');
    }

    return (
    <>
    <Header />
    <h2>Would you like to add any comments?</h2>
        <label htmlFor="comments">Comments:</label>
        <textarea
            type="text"
            name="comments"
            rows="5"
            cols="50"
            onChange={event => setCommentsInput(event.target.value)}
            value={commentsInput}
        >
        </textarea>
        <Link to="/review">
            <button onClick={onClickNext}>
                NEXT: Review
            </button>
        </Link>
    </>
    )
}

export default Comments;