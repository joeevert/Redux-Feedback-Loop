const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all feedback
router.get('/', (req, res) => {
    console.log('GET /feedback');
    const sqlText = 'SELECT * from "feedback";';
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error GET /feedback', error)
            res.sendStatus(500);
        });
})

// POST new feedback
router.post('/', (req, res) => {
    console.log('POST /feedback');
    const newFeedback = req.body;
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then((result) => {
      console.log('added feedback to db', newFeedback)
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error POST /feedback', error);
      res.sendStatus(500);
    })
  });

module.exports = router;