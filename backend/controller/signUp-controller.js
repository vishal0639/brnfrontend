let User=require("../models/signUpModel");
let bcrypt=require('bcrypt');
console.log("inside dd");
const createUser=async(req,res)=>{
    let { body:{name,gender,maritalStatus,mobileNo,city,email,state,password},
         file:{path}}=req;
     let hashedPassword=await bcrypt.hash(password,10);    
        let user=new User({
            name:name,
            gender:gender,
            maritalStatus:maritalStatus,
            profilePic:path,
            mobileNo:mobileNo,
            city:city,
            email:email,
            state:state,
            password:hashedPassword,
            reTypedPassword:hashedPassword
          }) 
          User.insertMany([user]).then(()=>{
            res.json({msg:'saved into db',
            user:user})
          }).catch((e)=>{
            console.log(user)
            res.json({user:user,msg:`unable to save because of ${e}`});
          })
    
}

module.exports=createUser;