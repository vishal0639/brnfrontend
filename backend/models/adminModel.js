const mongoose=require('mongoose');
const {Schema,model}=mongoose;

let adminSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:false,
        default:'admin'
    }
},{ collection: 'admin', capped: { max: 1, size: 1000000, autoIndexId: true } });

let admin={email:'pulseadmin@gmail.com',password:'pulseadmin'}

let AdminModel=model('admin',adminSchema);

AdminModel.insertMany([admin]);

module.exports=AdminModel;
