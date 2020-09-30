const { MongoClient } = require('mongodb');
const dbconfig = require('./db.config');
// const uri = "mongodb+srv://pfuser:POiu+_09@spicasolutions.4alaj.gcp.mongodb.net/providentfund?retryWrites=true&w=majority";

const client = new MongoClient(dbconfig.url);

async function run() {
    try {
        await client.connect();

        const db = client.db(dbconfig.db);
        console.log("Successfully connected to the database!");

        const coll = db.collection('employees');
        const members = await coll.find().toArray();
        console.log(members);
    }
    finally {
        await client.close();
        console.log("Closed connection. Goodbye!");
    }
}
run().catch(console.dir);