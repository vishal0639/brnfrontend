console.log("inside route10");
let express=require('express');
let router=express.Router();
let upload=require("../multer/storage");
let createUser=require("../controller/signUp-controller");

router.use("/uploads",express.static("uploads"))
router.post("/signUp",upload.single("profilePic"),createUser);


module.exports=router;