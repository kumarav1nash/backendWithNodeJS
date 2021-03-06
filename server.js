const http = require('http'); //library to create a server
const fs = require('fs'); //library to read files
const path = require('path'); //library to get the path of the file

 //get the path of the file

//create a server
const server = http.createServer((req, res) => {
    const filePath = getRequestedFile(req.url); //get the path of the file
    res.setHeader('Content-Type', 'text/html'); //set the content type of the response
    
    fs.readFile(filePath,(err,fileData) =>{
        if(err){
            res.statusCode = 404;
            res.end('File not found');
        }
        res.end(fileData);
    });
    

});

server.listen(3000, () => {
    
    console.log('server is running on at http://localhost:3000');
});


function getRequestedFile(url) {
    var filePath = path.join(__dirname, '/views');
    switch(url) {   
        case '/':
            filePath = path.join(filePath, '/home.html');
            break;
        case '/about':
            filePath = path.join(filePath, '/about.html');
            break;
        case '/contact':
            filePath = path.join(filePath, '/contact.html');
            break;
        default:
            filePath = path.join(filePath, '/404.html');
    }
    return filePath;
}