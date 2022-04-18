const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { filterByQuery, findById, createNewNote, validateNote } = require('../../lib/notes');

module.exports = router;