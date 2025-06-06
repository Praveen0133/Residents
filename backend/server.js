const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
const User = require("./model/user.model");
const connectDb=require("./config/db")
const PORT = 8000;

connectDb()

app.use(express.json())
app.post("/post", async (req, res) => {
  try {
    const newUser = new User(req.body);
    if (!newUser) {
      res.status(500).json("user not created");
    }
    await newUser.save();
    res.status(201).json({ message: "User added successfully!" });
  } catch (error) {
    res.status(400).json(error);
  }
});
app.get("/get", async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});
app.listen(PORT, () => {
  console.log("server started");
});
