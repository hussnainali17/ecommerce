1-npm init -y
2-npm i
3- npm i express dotenv mongoose
4- in env file set port no and connect_db --CONNECT_DB=mongodb://0.0.0.0/ecommerce --PORT=4000--
5-now create a app.js file aquire express  and congig the dotenv 
const express=require('express')
const app=express();
const dotenv=require('dotenv')
dotenv.config();

const ConnectToDB=require('./db/db')
ConnectToDB();

app.get('/',(req,res)=>{
    res.send("hello world");
})

module.exports=app;

---------------------------------
6-now setup mongodb create a folder db and create a file db.js  then write this fun
const mongoose=require('mongoose')
function ConnectToDB(){
    mongoose.connect(process.env.CONNECT_DB).then(()=>{
    console.log("Connected to mongodb");
}).catch((err)=>{
    console.log(err);
})}

module.exports=ConnectToDB;
----------------------------------------------
7-now create a server file aquire a app file in it , acquire http and create server and listen on port in env
const http=require('http');
const app=require('./app')
const port=process.env.PORT || 3000
const server=http.createServer(app);
server.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})

-----------------
8- now run the file by npx nodemon ./app.js
