const express = require('express');
const { rearg } = require('lodash');



const app = express();



//add middle ware for json
app.use(express.json());
app.use(express.static(__dirname + '/views'));





//listen to 3000 port
app.listen(3000,()=>{
    console.log("listening to port 3000");
})


//here i will create router to manage all http request in single place
const userRouter = express.Router();
app.use("/user",userRouter);

const authRouter = express.Router();
app.use("/auth",authRouter);


authRouter
.route("/signup")
.get(getSignUp)
.post(postSignUp)

userRouter
    .route("/")
    .get(route)
    .post(route)
    .patch(route)
    .delete(route)


userRouter
    .route("/:q")
    .get(returnRouteParam)
    .post(returnRouteParam)


function route(req,res){
    console.log("route to given parameter");
    res.end("done")
}
 
function returnRouteParam(req,res){
    let param = req.params;
    let paramObj = JSON.parse(JSON.stringify(param))
    if(paramObj['q']==="q"){
        let query = req.query;
        res.end(JSON.stringify(query))
    }else{
        res.end("Holla "+JSON.stringify(param))
    }
}

function getSignUp(req,res){
    res.sendFile("./views/signup.html",{root:__dirname})
}

function postSignUp(req,res){
    // console.log(req.body);
    console.log(req.body.email);
    res.end(JSON.stringify(req.body))
}