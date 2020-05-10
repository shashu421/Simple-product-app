var express = require("express");
var router = express.Router();
// var addNewProd = require("../model/addnewprod.js");
var mongoose = require("mongoose");
var Productattribute = require("../model/productattributes.js");

//product attribute routes

router.get("/productattribute/home",function(req,res){
    Productattribute.find({},function(err,prod){
        if(err){
            console.log(err);
        }
        else{
            res.render("productattributes/index",{product:prod});
        }
    });
});

//create route
router.get("/productattribute/new",function(req,res){
    res.render("productattributes/productattribute");
});

router.post("/productattribute/new",function(req,res){
    Productattribute.create(req.body.prodattr,function(err,newset){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/products/productattribute/home");
        }
    });
});


//edit route
router.get("/productattribute/:id/edit",function(req,res){
    Productattribute.findById(req.params.id,function(err,foundedprod){
        if(err){
            res.redirect("products/productattribute/home");
        }
        else{
            res.render("productattributes/edit",{product:foundedprod});
        }
    });
});

//update route
router.put("/productattribute/:id",function(req,res){
    Productattribute.findByIdAndUpdate(req.params.id,req.body.prod,function(err,updatedprod){
        if(err){
            res.redirect("/");
        }
        else{
            res.redirect("/products/productattribute/home");
        }
    });
});

//destroy route
router.delete("/productattribute/:id",function(req,res){
    //destroy blog
    Productattribute.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/");
        }
        else{
            //redirect somewhere
            res.redirect("/products/productattribute/home");
        }
    });
    
});


router.get("/productattribute/cancel",function(req,res){
    res.redirect("/products/productattribute/home");
});

module.exports = router;