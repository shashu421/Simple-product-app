var express = require("express");
var router = express.Router({mergeParams:true});
// var addNewProd = require("../model/addnewprod.js");
var mongoose = require("mongoose");
var product = require("../model/addnewproduct.js");

//index route
router.get("/",function(req,res){
    product.find({},function(err,products){
        if(err){console.log(err);}
        else{
            res.render("products/index",{products:products});
        }
    });
    
});

//new route
router.get("/new",function(req,res){
    res.render("products/new");
});

//create route
router.post("/new",function(req,res){
    //create a new dog
    product.create(req.body.product,function(err,newProduct){
        if(err){res.render("products/new");}
        else{
            //redirect somewhere
            res.redirect("/products");
        }
    });
    
});

//show route
router.get("/:id",function(req,res){
    product.findById(req.params.id,function(err,foundedproduct){
        if(err){res.redirect("/");}
        else{
            res.render("products/show",{product:foundedproduct});
        }
    });
});

//edit route
router.get("/:id/edit",function(req,res){
    product.findById(req.params.id,function(err,foundedproduct){
        if(err){
            res.redirect("/products");
        }
        else{
            res.render("products/edit",{product:foundedproduct});
        }
    });
});

//update route
router.put("/:id",function(req,res){
    product.findByIdAndUpdate(req.params.id,req.body.product,function(err,updatedproduct){
        if(err){
            res.redirect("/products");
        }
        else{
            res.redirect("/products/"+ req.params.id);
        }
    });
});

//destroy route
router.delete("/:id",function(req,res){
    //destroy blog
    product.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/products");
        }
        else{
            //redirect somewhere
            res.redirect("/products");
        }
    });
    
});

module.exports = router;