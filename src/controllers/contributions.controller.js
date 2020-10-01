/*
	admin_account
	firstname
	middlename
	lastname
	dob
	email
	mobilephone
	homephone
	empid
	title
	location
	office
	membersince
	
	beneficiaries [] = 
		firstname
		middlename
		lastname
		dob
		email
		relationship
*/
const { MongoClient, ObjectID } = require('mongodb');
const DB_CONFIG = require('../db.config');

exports.create = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.find = (req, res) => {
    // console.log({ DB_CONFIG });
    const client = new MongoClient(DB_CONFIG.url);

    const name = req.query.name;
    const loc = req.query.loc;

    var condition = name ? { fullname: { $regex: new RegExp(name), $options: "i" }} : {};

    if (loc) {
        condition.location = loc;
    }
    console.log({ condition });

    var fields = {
        firstname: 1,
        lastname: 1,
        dob: 1,
        title: 1,
        email: 1,
        mobilephone: 1
    };

    async function run() {
        try {
            await client.connect();
    
            const db = client.db(DB_CONFIG.db);
            console.log("Successfully connected to the database!");
    
            // const coll = db.collection(DB_CONFIG.collections.MEMBERS);
            const members = await db.collection(DB_CONFIG.collections.MEMBERS).find(condition, fields).toArray();
            console.log(members);
            res.send(members);
        }
        finally {
            await client.close();
            console.log("Closed connection. Goodbye!");
        }
    }
    run().then().catch(console.dir);
}

exports.get = (req, res) => {
    // console.log({ DB_CONFIG });
    const client = new MongoClient(DB_CONFIG.url);

    const id = req.params.id;
    console.log(`get id = ${id}`);
    // var condition = name ? { fullname: { $regex: new RegExp(name), $options: "i" }} : {};
    // console.log({ condition });

    async function run() {
        try {
            await client.connect();
    
            const db = client.db(DB_CONFIG.db);
            console.log("Successfully connected to the database!");
    
            // const coll = db.collection(DB_CONFIG.collections.MEMBERS);
            const rset = await db.collection(DB_CONFIG.collections.MEMBERS).findOne({ "_id": ObjectID(id) });
            console.log(rset);
            res.send(rset);
        }
        finally {
            await client.close();
            console.log("Closed connection. Goodbye!");
        }
    }

    run().then()
        .catch(err => {
            console.log(err);
        });
}

exports.getContributions = (req, res) => {
}

exports.update = (req, res) => {

}
