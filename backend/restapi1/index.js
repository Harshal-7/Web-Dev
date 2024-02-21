const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const port = 3000;

// Middleware - plugins
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/users", (req, res) => {
  const html = `
          <ul>
              ${users
                .map((user) => `<li> ${user.first_name} </li>`)
                .join("")}    
          </ul>
      `;
  res.send(html);
});

app
  .route("/api/users")
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    // create new user
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
    const user = users.find((user) => user.id === req.id);
    return res.json(user);
  })
  .patch((req, res) => {
    // ID stores the Id from the given Parameters in the URL.
    const ID = Number(req.params.id);
    // body stores the body in which we've to make changes.
    const body = req.body;
    // Finding the user Id from the user array.
    const userIndex = users.findIndex((user) => user.id === ID);
    // If we found a user with its Id then gotUser stores that object.
    const gotUser = users[userIndex];
    // Here gotUser has the user Object and body has the changes we have to made.
    const updatedUser = { ...gotUser, ...body };
    // After Merging them, Update the users Array.
    users[userIndex] = updatedUser;
    // Lastly, write the changes into the json file.
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "success", updatedUser });
    });
  })
  .delete((req, res) => {
    // TODO: delete the user with id
    const ID = Number(req.params.id);
    const body = req.body;
    const userIndex = users.findIndex((user) => user.id === ID);
    users.splice(userIndex, 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "successfully deleted!" });
    });
  });

app.listen(port, () => console.log(`Server started on port ${port}!`));
