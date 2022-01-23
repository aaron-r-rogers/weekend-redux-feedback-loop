import Header from '../Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Link } from 'react-router-dom';
import axios from 'axios';

function Review () {

    const dispatch = useDispatch();

    const feelings = useSelector(store => store.feelingsReducer)
    const understanding = useSelector(store => store.understandingReducer)
    const support = useSelector(store => store.supportReducer)
    const comments = useSelector(store => store.commentsReducer)

    const onSubmit = () => {

        axios.post('/review', {
            feeling: feelings,
            understanding: understanding,
            support: support,
            comments: comments,
        }).then(res => {
            console.log('POST /feedback successful', res);
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
        <Link to="/confirmation">
            <button onClick={onSubmit}>
                SUBMIT
            </button>
        </Link>
    </>
    )
}

export default Review;