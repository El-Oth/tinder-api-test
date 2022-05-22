const { MongoClient } = require("mongodb");
const {v4: uuidv4} = require('uuid')
const uri = process.env.MONGO_URI;

// Get Messages by from_userId and to_userId

const getMessages = async (req, res) => {
        const {userId, correspondingUserId} = req.query
        const client = new MongoClient(uri)
    
        try {
            await client.connect()
            const database = client.db('app-data')
            const messages = database.collection('messages')
    
            const query = {
                from_userId: userId, to_userId: correspondingUserId
            }
            const foundMessages = await messages.find(query).toArray()
            res.send(foundMessages)
        } finally {
            await client.close()
        }
    }

    // Add a Message to our Database

    const addMessages = async (req, res) => {
            const client = new MongoClient(uri)
            const message = req.body.message
        
            try {
                await client.connect()
                const database = client.db('app-data')
                const messages = database.collection('messages')
        
                const insertedMessage = await messages.insertOne(message)
                res.send(insertedMessage)
            } finally {
                await client.close()
            }
        }

        module.exports = {addMessages, getMessages}