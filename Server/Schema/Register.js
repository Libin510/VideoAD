const mongoose=require('mongoose')


const Regi=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:String}
    
})

const Uregster=mongoose.model("Vuser",Regi)

module.exports=Uregster