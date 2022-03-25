const express = require("express");
const https = require("https");
const path = require("path");


const index = require('./routes/index')

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);


// app.get("/", function(req, res){
//   res.sendFile(__dirname + "/index.html");
// });



app.listen(port, ()=>{
  console.log("Server runnig on port 3000");
});