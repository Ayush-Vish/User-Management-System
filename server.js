// requiring all the packages which are stored in app.js
const app = require('./app.js')
// Taking port and hostname from .env file
const PORT = process.env.PORT || 2000
const HOSTNAME = process.env.HOSTNAME
// Listening on given PORT 
app.listen(PORT,()=>{
    console.log(`Server is running on ${HOSTNAME}:${PORT}`) 
})

