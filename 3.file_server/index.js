const fs = require("fs");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readdir(".", (err, files) => {
      console.log(files);
      if (err) {
        res.end("cannot be read");
      } else {
        let data = "";
        files.forEach((file) => {
          data += `<li><a href="http://localhost:4500/${file}">${file}</a></li>`;
        });
        res.setHeader("Content-type", "text/html");
        res.end(`<ul style="margin:100px;line-height:40px">${data}</ul>`);
      }
    });
  }
  if (req.url) {
    fs.readdir(`.${req.url}`, (err, files) => {
      if (err) {
        fs.readFile(`.${req.url}`, (err, data) => {
          if (err) {
            res.write(req.url);
            res.end("cannot read file");
          } else {
            res.end(data);
          }
        });
        // res.end("cannot be read");
      } else {
        let data="";
        files.forEach((file) => {
            data+=`<li>${file}</li>`;
        });
        res.setHeader("Content-type","text/html");
        res.end(`<ul style="margin:100px;line-height:40px">${data}</ul>`);
      }
    });
  }
  if (req.url == "/public/other") {
    fs.readdir(`.${req.url}`, (err, files) => {
      if (err) {
        res.end("cannot be read");
      } else {
        files.forEach((file) => {
          res.write(`<p>${file}</p>`);
        });
        res.end();
      }
    });
  }
});

server.listen(4500, () => {
  console.log("server started in port 4500");
});
