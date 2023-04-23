const express = require('express')
const bodyParser = require('body-parser')

const fs = require('fs')

require('dotenv').config()

// express config 
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000

// // mongoose config
// const mongoose = require('mongoose')
// const pw = process.env.MONGODB_PWORD
// const uri = `mongodb+srv://ckuoch:${pw}@itinerate.belylck.mongodb.net/Main?retryWrites=true&w=majority`

// const { Schema, model } = mongoose

// const eventSchema = new Schema({
//     _id: String,
//     city: String,
//     description: String,
//     location: String,
//     cost: String,
//     picture: String,
//     tags: String,
// },
// {
//     collection: 'Event Blocks'
// }
// )

let allEvents = {}
fs.readFile('./events.json', 'utf-8', (err, data) => {
    if(err) throw err
    allEvents = JSON.parse(data)
})

app.get('/', (req, res) => {
    console.log(`/`);
     
    res.send('Hello World!')
})

app.get('/getSuggestions', async (req, res) => {

    city = req.query.city
    console.log(`/getEvents ${city}`)

    // await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    // console.log('db connected')
    // mongoose.model('Event', eventSchema)
    // events = await mongoose.model('Event').find({ city: pars.city })

    console.log(allEvents)
    
    const events = []
    for(i of allEvents) {
        if(i['city'] == city) {
            events.push(i)
        }
    }
    events_shuffled = [...events].sort(() => Math.random() - 0.5)
    
    let ret = {}
    ret['Food'] = []
    ret['Outdoor'] = []
    ret['Landmark'] = [] 
    ret['Shopping'] = []
    ret['Nightlife'] = []

    for(i of events_shuffled) {
        if(ret[i['tags']].length >= 3) {
            continue
        }
        ret[i['tags']].push(i)
        console.log(ret)
    }

    res.status(200).send(ret)

})

app.get('/getEvents', async (req, res) => {

    interested = JSON.parse(req.query.interested)
    city = req.query.city

    const events = []
    for(i of allEvents) 
        if(i['city'] == city) 
            events.push(i)
    events_shuffled = [...events].sort(() => Math.random() - 0.5)


    ret = []

    for(i of interested)
        for(j of events)
            if(j['_id'] == i) ret.push(j)

    for(i of events_shuffled) {
        if(ret.includes(i)) 
            continue
        ret.push(i)
    }
    
    res.status(200).send(ret)
    
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})