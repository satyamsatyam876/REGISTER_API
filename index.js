const express = require('express')
const app = express()
const port = 5000;
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
app.use(express.json())
app.use('/api/user', authRoute)


mongoose.connect('mongodb://127.0.0.1:27017/database').then(() => {
    console.log(`connect to db`)
}).catch((err) => {
    console.log(`${err}`)
})



app.get('/', (req, res) => {

})





app.listen(port, (err) => {
    if (err) {
        console.log(`${err}`)
    }
    else {
        console.log('Server is running on port ${port}')
    }
})