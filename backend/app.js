const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config()

const app = express()

const pw = process.env.MONGODB_PWORD
const uri = `mongodb+srv://ckuoch:${pw}@itinerate.belylck.mongodb.net/?retryWrites=true&w=majority`;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });


async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
      const db = client.db("Main");
         // Use the collection "people"
         const col = db.collection("Event Blocks");
        // Construct a test document                                                                                                                                                              
        //  let testDocument = {
        //      "name": { "first": "Alan", "last": "Turing" },
        //      "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
        //      "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
        //      "contribs": [ "Turing machine", "Turing test", "Turingery" ],
        //      "views": 1250000
        //  }
         // Insert a single document, wait for promise so we can read it back
        //  const p = await col.insertOne(personDocument);
         // Find all docs
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);
        } catch (err) {
         console.log(err.stack);
     }
      finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);


app.get('/', (req, res) => {
    console.log(`reached`,);
     
    res.send('Hello World!')
})

// app.get('/getCards', (req, res) => {
//     console.log(`cards`,);
//     if (req.query.city == "LA")
//         {
//             collection = LA_data
//         }
//     else
//         collection = NY_data
// })

app.post('/getTags', (req, res) => {
    let data = req.query
    res.send('Data Received: ' + JSON.stringify(data))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})