import Header from '../Header/Header';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function Review () {

    const feelings = useSelector(store => store.feelingsReducer)
    const understanding = useSelector(store => store.understandingReducer)
    const support = useSelector(store => store.supportReducer)
    const comments = useSelector(store => store.commentsReducer)




    const onSubmit = () => {

        axios.post('/feedback', {
            feeling: customerInfo.name,
            understanding: customerInfo.streetAddress,
            support: customerInfo.city,
            comments: customerInfo.zip,
        }).then(res => {
            console.log('POST /feedback successful', res);
            history.push('/')
            dispatch({
            type: 'RESET'
            })
        })
        .catch (err => {
            console.error('Error in POST /feedback', err)
        })

    }

    return (
    <>
    <Header />
    <h2>Review Your Feedback</h2>
        <h4>Feelings: {feelings}</h4>
        <h4>Understanding: {understanding}</h4>
        <h4>Support: {support}</h4>
        <h4>Comments: {comments}</h4>
        <Link to="/">
            <button onClick={onSubmit}>
                SUBMIT
            </button>
        </Link>
    </>
    )
}

export default Review;