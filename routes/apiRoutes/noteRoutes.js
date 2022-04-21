const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { filterByQuery, createNewNote, validateNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;

    if(req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400)
    } else {
        const note = createNewNote(req.body, notes);
        res.json(notes)
    }
})
module.exports = router;