const {MongoClient, ObjectId} = require('mongodb')
const config = require('../config/config')
require('dotenv').config()


const MONGO_URI =  `mongodb://${config.mongo.DB_HOST}:${config.mongo.DB_PORT}` 
const MONGO_CLIENT = new MongoClient(MONGO_URI)
const DB_NAME = config.mongo.DB_NAME



async function connect(){
    try {
        await MONGO_CLIENT.connect()
        console.log('Connected successfully to server')
        return MONGO_CLIENT.db(DB_NAME)
         
    } catch (error) {
        console.log(error);
    }
   
}

async function get(collection_name,id){
    try {

        const DB = await connect()
        const collection = DB.collection(collection_name)


        let findResult = null;

        if(id){
            console.log("validando por id");
            findResult = await collection.find({'_id': new ObjectId(id)}).toArray();
            return findResult
        }

        findResult = await collection.find().toArray();
        return findResult

    } catch (error) {
        console.log(error)
    } finally {
       MONGO_CLIENT.close()
    }
}


async function insert(collection_name,data){
    try {

        const DB = await connect()
        const collection = DB.collection(collection_name)
        //const insertResult = await collection.insertOne({data})
        return await collection.insertOne({...data})


       
    } catch (error) {
        console.log(error)
        return 0
    } finally {
       MONGO_CLIENT.close()
    }
}

async function update(collection_name,id,data){
    try {

        const DB = await connect()
        const collection = DB.collection(collection_name)
        return await collection.updateOne({"_id":  new ObjectId(id)},{$set : {...data}})

       
    } catch (error) {
        console.log(error)
        return -1
    } finally {
       MONGO_CLIENT.close()
    }
}


async function desactivate(collection_name,id){
    try {

        const DB = await connect()
        const collection = DB.collection(collection_name)
        return await collection.updateOne({"_id":  new ObjectId(id)},{$set : {"status": "I"}})


       
    } catch (error) {
        console.log(error)
        return -1
    } finally {
       MONGO_CLIENT.close()
    }
}

module.exports = {
    get,
    insert,
    update,
    desactivate,
}