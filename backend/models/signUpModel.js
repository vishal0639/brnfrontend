let mongoose = require("mongoose");

let signUpSchema = new mongoose.Schema({
  name: {
    required: [true, "name is compulsory"],
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z]+$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid name (only alphabetic characters allowed)`,
    },
    minLength: [3, "too short to store"],
  },
  gender: {
    type: String,
    enum: {
      values: ["MALE", "FEMALE"],
      message: "{VALUE} is not supported",
    },
  },
  maritalStatus: {
    type: String,
    enum: {
      values: ["MARRIED", "SINGLE"],
      message: "{VALUE} is not supported",
    },
  },
  profilePic: {
    required: true,
    type: String,
  },
  mobileNo: {
    required: true,
    type: String,
    validate: {
      validator: function (v) {
        return /^(0|91)?[6-9][0-9]{9}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  city: {
    required: true,
    type: String,
  },
  state: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid email id`,
    },
  },
  password: {
    required: true,
    type: String,
    minLength: [4, "too short to store"],
  },
  reTypedPassword: {
    required: true,
    type: String,
    minLength: [4, "too short to store"],
  },
  role: {
    type: String,
    default: "student",
  },
});

let newUser = new mongoose.model("users", signUpSchema);

module.exports = newUser;
