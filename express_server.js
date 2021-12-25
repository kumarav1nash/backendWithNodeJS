const express = require('express'); //library to create a server
const fs = require('fs'); //library to read files
const path = require('path'); //library to get the path of the file

const app = express(); //create a server
app.use(express.json())
app.listen(3000, () => {
    console.log('server is running on at http://localhost:3000');
}
);

let user = {};

//routing 
app.get('/',(req,res)=>{
    res.end("Home World")
})
app.get('/about',(req,res)=>{
    res.end("about thois")
})


app.get('/about-me',(req,res)=>{
    res.redirect(301,'/about');
})



app.get('/user',(req,res)=>{
    res.end("user "+user.name+" : "+user.agr)
})
//post => send data from client to server
app.post('/user',(req,res)=>{
    console.log(req.body);
    user = req.body;
    res.end("Recieved")
})
app.patch('/user',(req,res)=>{
    console.log(req.body);
    for(key in req.body){
        user[key] = req.body[key];
    }
    res.end("updated");
    
})