const http = require("http");
const fs = require("fs");

// const myServer = http.createServer((req, res) => {
//   console.log("hehe");
//   res.end("hello from server again");
// });

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} : New request received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home-page!!");
        break;
      case "/about":
        res.end("Ore wa Monkey D. Luffy");
        break;
      default:
        res.end("404 Not Found!");
    }
  });
});
myServer.listen(8000, () => console.log("server started!!"));
