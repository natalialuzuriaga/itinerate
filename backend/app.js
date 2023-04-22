const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/getTags', (req, res) => {
    let data = req.query
    res.send('Data Received: ' + JSON.stringify(data))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})