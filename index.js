const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// middle were
app.use(cors())
app.use(express.json())

// user and password
user: 'learn_skill_hub_server'
password: 'PbhD9iFjcoJjVkjI'

// mongodb
const uri = "mongodb+srv://learn_skill_hub_server:PbhD9iFjcoJjVkjI@cluster0.kgqmoa1.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        // mongodb collections
        const corseCollections = client.db('Learn_skill_hub_server').collection('Courses')

        // all course getting
        app.get('/courses', async(req, res) => {
            const result = await corseCollections.find().toArray();
            res.send(result)
        })

        // getting specific course
        app.get('/courses/:id', async(req, res)=> {
            const id = req.params.id;
            // console.log(id)
            const filter = {_id: new ObjectId(id)}
            const result = await corseCollections.findOne(filter);
            res.send(result)
        })










        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.log);













// all courses data getting
app.get('/courses', (req, res) => {
    const result = data;
    res.send(result)
})


app.get('/', (req, res) => {
    res.send('This is Learn skill server')
})

app.listen(port, () => {
    console.log(`This server on: ${port}`)
})