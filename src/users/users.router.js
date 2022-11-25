const router = require('express').Router()
//? File´s imports
const usersServices = require('./users.services')

router.get('/users', usersServices.getAllUsers)

router.post('/users', usersServices.postNewUsers)

router.get('/users/:id', usersServices.getUserById)


module.exports = router
