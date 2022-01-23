
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST route to add reviewed feedback to database
router.post('/', (req, res) => {
    const feedback = req.body;
    console.log(feedback)
    const sqlText = `
        INSERT INTO feedback (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4)
    `;
    pool.query(sqlText, [
            feedback.feeling, 
            feedback.understanding, 
            feedback.support, 
            feedback.comments
        ])
        .then((dbRes) => {
            console.log(`Added feedback to database:`, feedback);
            res.sendStatus(201); 
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

// GET route to get all the creatures from the database
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM feedback ORDER BY date DESC;`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;