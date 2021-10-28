const http = require('http');
const port = 3000;
const start = require("./pcRamUsage.js");

http.createServer((req, res) => {
    var url = req.url;
    if (url === "/start") {//write a response
      res.end(JSON.stringify(start, null, 2)); //end the response
    } else {
      res.write("<h1>Working</h1>"); //write a response
      res.end();
    }
  })
  .listen(port, () =>
    console.log(`Server is running in http://localhost:${port}`)
);