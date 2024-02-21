const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} : ${req.method} ${req.url} New Request Received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page!");
        break;
      case "/about":
        const username = myUrl.query.myname;
        const userId = myUrl.query.userId;
        res.end(`Hey ${username} your id is : ${userId}`);
        break;
      default:
        res.end("404 not found!");
        break;
    }
  });
});

myServer.listen(5000, () => console.log("server started!!"));
