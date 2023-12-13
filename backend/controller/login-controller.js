const AdminModel = require("../models/adminModel");
let User = require("../models/signUpModel");
let bcrypt = require("bcrypt");

let validateUser = async (req, res) => {
  let {
    body: { email,role},
  } = req;

  let validatingDetails = async (user) => {
    try {
      let isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      let {
        _doc: { password, reTypedPassword, ...userDetails },
      } = user;
      if (isValidPassword) {
        res.json({
          msg: "logged in successfully",
          isLoggedIn: true,
          role:userDetails.role,
          user: userDetails,
        });
      } else {
        res.json({
          msg: "Invalid Email or Password",
          isLoggedIn: false,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  if(role==='admin'){
      console.log(role);
      AdminModel.findOne({email:email}).then((admin)=>{
        if(req.body.password===admin.password){
          res.json({
            isLoggedIn:true,
            msg:'logged in successfully',
            role:admin.role,
            user:'Admin',
            email:admin.email
          })
        }else{
          res.json({
            msg: "Invalid Email or Password",
            isLoggedIn: false,
          });
        }
      })
  }else{
    User.find()
    .and({ email: email })
    .then((userInfo) => {
      if (Object.keys(userInfo).length === 0) {
        res.json({ msg: "Invalid Email or Password"});
      } else {
        validatingDetails(userInfo[0]);
      }
    });
  }
};

module.exports = validateUser;
