var express = require("express");
var mongoose = require("mongoose");


//Schema and model of database
var productschema = new mongoose.Schema({
    Productname:{
        type:String
    },
    Category:{
        type:String
    },
    Price:{
        type:Number
    },
    Disprice:{
        type:Number
    },
    Metadescription:{
        type:String
    },
    Tags:{
        type:Array
    },
    Productattribute:{
         type:Array
    },
    Productdescription:{
        type:String 
    },
    Image:{
        type:String
    }
});

module.exports = mongoose.model("product",productschema);