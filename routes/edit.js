const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit) //get edit page with id of item we want to edit
router.post('/remove/:id', editController.deleteItem) //deletes Item

router.post('/update/:id', editController.updateItem)// updates the item usin data passed from the form.


module.exports = router