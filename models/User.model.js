const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "Username is required."],
      unique: true
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      // this match will disqualify all the emails with accidental empty spaces, missing dots in front of (.)com and the ones with no domain at all
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
      unique: true,
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required."]
    },
    imgUrl:{
      type:String,
      default:"https://as2.ftcdn.net/v2/jpg/02/34/61/79/1000_F_234617921_p1AGQkGyEl8CSzwuUI74ljn6IZXqMUf2.jpg"
    },
  },
  
  {
    timestamps: true
  }
);

module.exports = model("User", userSchema);
