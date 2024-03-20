const express = require('express')
const path = require('path')

const app = express();

const PORT = process.env.PORT || 3000;
app.set('view engine','ejs'); // ejs template engine
//console.log(app.get('view engine'));
//console.log(app.get('views'));
app.use(express.static('public')); // for static middleware

app.get('/',(req,res)=>{
   // res.send('hello from express')
  // res.sendFile(path.resolve(__dirname)+'/index.html');
  res.render('index',{
   title:'My home page'
  })
});

app.get('/about',(req,res)=>{
    
   // res.sendFile(path.resolve(__dirname)+'/about.html');
    res.render('about',{
      title:'My about page'
    })
 })
 app.get('/download',(req,res)=>{
    
    res.download(path.resolve(__dirname)+'/about.html'); // for download
 })

app.listen(PORT, ()=>{
    console.log(`listening on the port ${PORT}`);  //PORT=5000 node server.js 
})

// first normal routing
// link rounting
// link routing static middleware
// through a convetion jo index file hogi wo hmesa home ke liye li jaati hai by default.
// any cdn file add in head file