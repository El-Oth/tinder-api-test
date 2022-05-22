const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./server/config/.env" });
const connectDB = require("./config/db")
const usersRoute = require("./routes/useroute")
const chatRoute = require('./routes/chatroute')

const app = express();

connectDB();

app.use(cors());

app.use(express.json());



// Default
app.get("/", (req, res) => {
  res.json("Hello to my app");
});

// Routes
app.use('/api', usersRoute);
app.use('/api',chatRoute)

// // Get Messages by from_userId and to_userId
// app.get('/messages', async (req, res) => {
//     const {userId, correspondingUserId} = req.query
//     const client = new MongoClient(uri)

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const messages = database.collection('messages')

//         const query = {
//             from_userId: userId, to_userId: correspondingUserId
//         }
//         const foundMessages = await messages.find(query).toArray()
//         res.send(foundMessages)
//     } finally {
//         await client.close()
//     }
// })

// // Add a Message to our Database
// app.post('/message', async (req, res) => {
//     const client = new MongoClient(uri)
//     const message = req.body.message

//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const messages = database.collection('messages')

//         const insertedMessage = await messages.insertOne(message)
//         res.send(insertedMessage)
//     } finally {
//         await client.close()
//     }
// })

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("server running on PORT " + PORT));
