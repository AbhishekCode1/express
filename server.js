const express = require('express')

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`listening on the port ${PORT}`);  //PORT=5000 node server.js 
})