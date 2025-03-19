const express = require('express');
const { getContacts, createContact } = require('./contactController');

const router = express.Router();

router.get('/contacts', getContacts);
router.post('/contacts', createContact);

module.exports = router;