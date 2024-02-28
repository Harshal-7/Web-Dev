const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));

// Custom Middleware-1
app.use((req, res, next) => {
  console.log("hey! from middleware-1");
  next();
});

// Custom Middleware-2
app.use((req, res, next) => {
  console.log("hey! from middleware-2");
  next();
});

// Custom Middleware-3 with creating log file
app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `${req.method}: ${req.path} at time: ${Date.now()}\n`,
    (err, data) => {
      next();
    }
  );
});

// Routes
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li> ${user.name} </li>`).join("")}    
    </ul>
  `;
  res.send(html);
});

app
  .route("/api/users")
  .get((req, res) => {
    res.setHeader("myName", "Harsh");
    console.log(req.headers);
    res.json(users);
  })
  .post((req, res) => {
    //create new user
    const body = req.body;

    users.push({ ...body, id: users.length + 1 });

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "success", id: users.length });
    });
  });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const userIndex = users.findIndex((user) => user.id === id);
    const user = users[userIndex];

    const updatedUser = { ...user, ...body };
    users[userIndex] = updatedUser;

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "success", updatedUser });
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    users.splice(userIndex, 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "successfully deleted!" });
    });
  });

app.listen(port, () => console.log(`Server started on port ${port}!`));
