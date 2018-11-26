var mongoose = require('mongoose');

const ShoppingItemSchema = mongoose.Schema({
itemName:{
    type:String,
    require:true
},
itemQuantity:{
    type:String,
    require:true
},
itemBought:{
    type:Boolean,
    require:true
}

})

const item=module.exports=mongoose.model('item',ShoppingItemSchema);