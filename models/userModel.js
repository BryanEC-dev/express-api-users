const MONGO_DB = require('../db/mongo')
const COLLECTION = 'users'

async function getAllUser(){
    let users =""
    try{
        users = await MONGO_DB.get(COLLECTION, null)
        return users
        
    }catch(error){
        console.log(error)
        return users;

    }
}

async function getUser(id){
    let users =""
    try{
        users = await MONGO_DB.get(COLLECTION, id)
        return users
        
    }catch(error){
        console.log(error)
        return users;

    }
}

async function insertUser(data){
    let users =""
    try{
        users = await MONGO_DB.insert(COLLECTION, data)
        return users
        
    }catch(error){
        console.log(error)
        return users;

    }
}


async function updatetUser(id, data){
    let users =""
    try{
        users = await MONGO_DB.update(COLLECTION, id,data)
        return users
        
    }catch(error){
        console.log(error)
        return users;

    }
}

async function deletetUser(id){
    let users =""
    try{
        users = await MONGO_DB.desactivate(COLLECTION, id,)
        return users
        
    }catch(error){
        console.log(error)
        return users;

    }
}




module.exports = {
    getAllUser,
    insertUser,
    updatetUser,
    deletetUser,
    getUser,
}