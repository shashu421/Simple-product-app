//Required packages
var express = require("express"),
app = express(),
methodOverride = require("method-override"),
mongoose = require("mongoose"),
bodyParser = require("body-parser"),
cors = require("cors");

var product = require("./model/addnewproduct.js");
var Productattribute = require("./model/productattributes.js");
var productsroutes = require("./routes/productsroutes.js");
var productattributesroutes = require("./routes/productattributes.js");

//environment variables
require('dotenv').config();

//app config
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use("/products",productsroutes);
app.use("/products",productattributesroutes);

//database connection
// mongoose.connect("mongodb://localhost/humourbaba");
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected Database Successfully");
});

//Restful routes

//index route
app.get("/",function(req,res){
    res.render("products/home")
});

//Server listening
app.listen("8000",function(){
    console.log("Product app has started on port 8000");
});
