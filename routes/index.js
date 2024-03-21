const router = require('express').Router();
const apiKeyMiddleware = require('../middlewares/apiKey');

//router.use(apiKeyMiddleware); // pure page pe middleware apply ho jayega just read about global middleware

router.get('/',(req,res)=>{   //http://localhost:3000/?api_key=1234567
   res.render('index',{
    title:'My home page'
   })
 });

 router.get('/about',(req,res)=>{  //http://localhost:3000/about/?api_key=1234567
     res.render('about',{
       title:'My about page'
     })
  });
  router.get('/download',(req,res)=>{
    
    res.download(path.resolve(__dirname)+'/about.html'); // for download
 });
//  router.get('/api/products', apiKeyMiddleware,(req,res)=>{
    router.get('/api/products',apiKeyMiddleware, (req,res)=>{     // pure page pe middleware apply ho jayega, you can pass 
        //multiple middleware on single route [apiKeyMiddleware, apiKeyMiddleware] yaha par 2 middleware hai single route par
    res.json([
        {
            id:'123',              //http://localhost:3000/api/products/?api_key=124
            name: 'chrome'
        },
        {
            id:'124',                //http://localhost:3000/api/products/?api_key=124
            name: 'firefox'
        }
    ])                                        //api ke andar we will send json data so for that reason we use json
 });


module.exports=router; 