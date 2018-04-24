const express = require('express')
const router = express.Router()
const messageController = require('../controllers/messages')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.post('/', messageController.create)



module.exports = router
