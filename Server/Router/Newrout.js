const express=require('express')
const User=require('../Controller/Userregi')
const login=require('../Controller/Userlog')

const router=express.Router()

router.route('/user').post(User)
router.route('/log').post(login)


module.exports=router