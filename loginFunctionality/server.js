const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.use(cors());
app.use("/uploads",express.static("uploads"))


let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  mobile: Number,
  gender: String,
  profilePic: String,
});

let User = mongoose.model("user", userSchema);

app.post("/register", upload.single("profilePic"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
    gender: req.body.gender,
    profilePic: req.file.path,
  });

  await newUser.save();
  res.json({ status: "success", msg: "User created" });
});

// Login
app.post("/login", upload.none(), async (req, res) => {
  console.log(req.body);

  let userArray = await User.find().and({ email: req.body.email });

  if (userArray.length > 0) {
    if (userArray[0].password === req.body.password) {
      let loginUserDetails = {
        firstName: userArray[0].firstName,
        lastName: userArray[0].lastName,
        email: userArray[0].email,
        mobile: userArray[0].mobile,
        gender: userArray[0].gender,
        profilePic: userArray[0].profilePic,
      };


      res.json({ status: "success", data: loginUserDetails });
    } else {
      res.json({ status: "failure", msg: "Enter valid password" });
    }
  } else {
    res.json({ status: "failure", msg: "User does not exist" });
  }
});

// Start the server
app.listen(1947, () => {
  console.log("Server is listening on port 1947");
});

// Connect to MongoDB
const connectToMDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/SignUp", {
  
  });
  console.log("Successfully connected to the database");
};

connectToMDB();
