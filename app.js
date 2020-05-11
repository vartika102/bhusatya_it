//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');//need not install separatly coz it's a core module

var app = express();

//importing routes
const route = require('./routes/route');

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/application');

//On connection
mongoose.connection.on('connected',()=>{
	console.log('Connected to database mongoDB @ 27017');
});

//if error in connection
mongoose.connection.on('error',(err)=>{
	if(err)
	{
		console.log('Error in database connection'+err);
	}
});

//port number
//const port = 3000;
const port = process.env.PORT || 8080;

//adding middlewares = cors
//we need a middleware to parse the data and use cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//we want all the paths preceding with /contact or /api or /abcd to be forwarded/directed to that very particular file(route.js)
//routes
app.use('/', route);

//static files
app.use(express.static(path.join(__dirname, 'public'))); //__dirname to add current dir path

//testing server // route
app.get('/',(req,res)=>{
	res.send('foober');
});

//binding server with port
app.listen(port, ()=>{
	console.log('Server Started at port: '+port);
});