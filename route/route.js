var express = require('express');
var item=require('../model/shoppingItem.js');

var router=express.Router();
router.get('/items',(req,res,next)=>{
    item.find(function(err,items){
        if(err){
            res.json(err);
        }else{
            res.json(items);
        }
    })
});

router.post('/item',(req,res,next)=>{
console.log(req.body);

    let newItem=new item({
        itemName:req.body.itemName,
        itemQuantity:req.body.itemQuantity,
        itemBought: req.body.itemBought
    });

newItem.save((err,item)=>{
    if(err){
        res.json(err);
    }else{
        res.json({msg:'Item has been added successfully'});
    }
});

});

router.put('/item/:id',(req,res,next)=>{

console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');

console.log(es.params.id);
    item.findOneAndUpdate({_id:res.params.id},{
        $set:{
            itemName:req.body.itemName,
            itemQuantity:req.body.itemQuantity,
            itemBought: req.body.itemBought
        }
    },
    function(err,result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        } 
    }
)
});

router.delete('/item/:id',(req,res,next)=>{
    item.remove({_id:res.params.id}, function(err,result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        } 
    }
    )
}); 

module.exports=router;