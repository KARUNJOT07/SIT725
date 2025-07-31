var express = require("express")
console.log("Server running on http://localhost:3000");
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;
app.listen(port,()=>{
console.log("App listening to: "+port)
})
