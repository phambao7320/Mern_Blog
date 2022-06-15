const express = require('express') 
const router = express.Router()

const models = require('../controllers/post')

router.get('/', models.getPost ) 

router.post('/', models.postPost )

router.put('/:id', models.putPost )

router.delete('/:id', models.deletePost )

module.exports = router ;