import axios from 'axios';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from '../Header/Header';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Admin () {

    const [data, setData] = useState([]);
    const columns = [
        {
        heading: 'Feeling',
        property: 'feeling'
        },
        {
        heading: 'Comprehension',
        property: 'understanding'
        },
        {
        heading: 'Support',
        property: 'support'
        },
        {
        heading: 'Comments',
        property: 'comments'
        },
        {
        heading: 'Delete',
        }
        ]

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = () => {
        // GET /review
        axios({
            method: 'GET',
            url: '/review'
        }).then(response => {
            console.log('GET /review response.data:', response.data);
            setData(response.data);
            console.log('feedback is:', feedback)
        }).catch(err => {
            console.log('GET /review failed:', err);
        });
    };

    return(
        <>
        <Header />
        {/* <ul>
            {feedback.map(entry => (
            <li key={entry.id}>
                {entry.comments}
            </li>
        ))}
        </ul> */}

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>{columns.map(col => 
                <TableCell key={`header-${col.heading}`}>
                    {col.heading}</TableCell>)}
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map(item =>
            <TableRow 
                sx={{ '&:last-child td, &:last-child th': 
                    { border: 0 } }} 
                key={`${item.id}-row`}>
                
                {columns.map(col => 
                    <TableCell 
                        key={`${item.id}-${col.property}`}>
                            {item[col.property]}
                    </TableCell>)}
            </TableRow>
            )}
        </TableBody>
    </Table>
    </TableContainer>
    </>
    )
};

export default Admin;