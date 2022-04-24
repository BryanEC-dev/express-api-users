require('dotenv').config()

module.exports = {
    mongo: {
        DB_USER : process.env.MONGO_USER || '',
        DB_PASSWORD : process.env.MONGO_PASSWORD || '',
        DB_HOST: process.env.MONGO_HOST || ' host prueba',
        DB_PORT: process.env.MONGO_PORT,
        DB_NAME: process.env.MONGO_DB_NAME,
    },

    api: {
        port : process.env.API_PORT || 3000
    },

    mySql:{
        
    },
    jwt : {
        authJwt : process.env.AUTH_JWT_SECRET,
    }
}