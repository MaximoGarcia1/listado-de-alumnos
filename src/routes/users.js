const{Router}=require('express')
const router = Router()
const getUser = require('../controllers/getUserByID')
const registerUser = require('../controllers/register')
const loginUser = require('../controllers/login')
const cors = require('cors')

router.route('/register')
.post(cors(),registerUser)

router.route('/login')
.post(cors(),loginUser)



module.exports = router