const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const { timeStamp } = require("console");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

// Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/myApp1")
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("Error: ", err));

// Schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
  },
  { timestamps: true }
);

// Model
const User = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.send("Homepage!");
});

app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
    <ul>
        ${allDbUsers
          .map((user) => `<li> ${user.name} : ${user.email} </li>`)
          .join("")}
    </ul>
    `;

  res.send(html);
});

app
  .route("/api/users")
  .get(async (req, res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
  })
  .post(async (req, res) => {
    const body = req.body;

    if (!body.name || !body.email || !body.gender || !body.jobTitle) {
      return res.status(400).json({ msg: "All fields are required!!" });
    }

    const result = await User.create({
      name: body.name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.jobTitle,
    });

    return res.status(201).json({ msg: "success" });
  });

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    return res.json(user);
  })
  .patch(async (req, res) => {
    const body = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { ...body });

    return res.json({ status: "success" });
  })
  .delete(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "successfully deleted" });
  });

app.listen(port, () => console.log(`Server started at port ${port}!`));
