const express = require("express");
const https = require("https");

const app = express();
const port = 3000;

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});


app.listen(port, ()=>{
  console.log("Server runnig on port 3000");
});