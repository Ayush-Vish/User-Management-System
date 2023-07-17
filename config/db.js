const mongoose  = require('mongoose')
// Connecting to database 
// As there is some time associated while connecting to DB So we have do to a Promise 
const connectToDB  =async ()=>{
    await mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log("Connected to database Successfully. Database id:" + conn.connection.host)
    }).catch((err)=>{
        console.log("Error:" + err)
        process.exit(1)
    })
}
module.exports= connectToDB 