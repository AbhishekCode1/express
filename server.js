const express = require('express')
const path = require('path')

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/',(req,res)=>{
   // res.send('hello from express')
   res.sendFile(path.resolve(__dirname)+'/index.html');
});

app.get('/about',(req,res)=>{
    
    res.sendFile(path.resolve(__dirname)+'/about.html');
 })
 app.get('/download',(req,res)=>{
    
    res.download(path.resolve(__dirname)+'/about.html');
 })

app.listen(PORT, ()=>{
    console.log(`listening on the port ${PORT}`);  //PORT=5000 node server.js 
})

// first normal routing
// link rounting
// link routing static middleware
// through a convetion jo index file hogi wo hmesa home ke liye li jaati hai by default.