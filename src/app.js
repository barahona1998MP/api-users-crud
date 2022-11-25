//? 1. Dependicies
const express = require('express')

const usersRouter = require('./users/users.router')

//? 2. Initial config
const port = 9001
const app = express()

//? 3. Json request availible
app.use(express.json())

//? 4. Verifique server optional
app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'})
})

app.use('/api/v1', usersRouter)

//? 5. Start sever
app.listen(port, () => {
    console.log(`Server started at port ${port} `)
})
