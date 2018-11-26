//Importing Modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cros = require('cors');

const route= require('./route/route');

var app=express();

//connect to mongo
mongoose.connect('mongodb://ItzGauravdb:Gaurav123@ds153705.mlab.com:53705/shoppinglist');

//on connection
mongoose.connection.on('connected',()=>{
console.log('MongoDB Connected');
});


// on connection error
mongoose.connection.on('error',(err)=>{
    console.log(err);
    });
 
    const PORT =3000;

// adding meadle ware
app.use(cros());
app.use(bodyParser.json());
app.use('/api',route);


    app.get('/',(req,res)=>{
        res.send('Test, Api is runing!');
    })
    app.listen(PORT,()=>{
        console.log('Server is started at PORT 3000'); 
    })