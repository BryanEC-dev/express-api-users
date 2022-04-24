
const user =  require('../models/userModel')

async function getAllUser(){
    let userData =''
    try {
        userData = await user.getAllUser();
        return userData
    } catch (error) {
        console.error(error)
        return userData
    }
}

async function getUser(id){
    let userData =''
    try {
        userData = await user.getUser(id);
        return userData
    } catch (error) {
        console.error(error)
        return userData
    }
}

async function insertUser(data){
    let userData =''
    try {
        userData = await user.insertUser(data);
        return userData
    } catch (error) {
        console.error(error)
        return userData
    }
}

async function updatetUser(id,data){
    let userData =''
    try {
        userData = await user.updatetUser(id, data);
        return userData
    } catch (error) {
        console.error(error)
        return userData
    }
}

async function deleteUser(id){
    let userData =''
    try {
        userData = await user.deletetUser(id);
        return userData
    } catch (error) {
        console.error(error)
        return userData
    }
}



module.exports = {
    getAllUser,
    insertUser,
    updatetUser,
    deleteUser,
    getUser
}