console.log("inside route10");
let express=require('express');
let router=express.Router();
let upload=require("../multer/storage");
let createUser=require("../controller/signUp-controller");
let validateUser=require("../controller/login-controller");

router.use("/uploads",express.static("uploads"))
router.post("/signUp",upload.single("profilePic"),createUser);
router.post("/validateUser",upload.none(),validateUser);


module.exports=router;