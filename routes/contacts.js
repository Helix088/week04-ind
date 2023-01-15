const express = require('express');
const routes = express.Router();

const contactsControl = require('../controllers/contacts');

routes.get('/', contactsControl.getContacts);

routes.get('/:id', contactsControl.getContact);

routes.post('/', contactsControl.createContact);

routes.put('/:id', contactsControl.updateContact);

routes.delete('/:id', contactsControl.deleteContact);

module.exports = routes;