const fs = require("fs");
const process = require("process");

if (process.argv[2] == "read") {
  fs.readFile(process.argv[3], { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("file cannot be read");
    } else {
      console.log(data);
    }
  });
}

if (process.argv[2] == "append") {
  fs.appendFile(process.argv[4], process.argv[3], (err) => {
    if (err) {
      console.log("cannot be appended");
    } else {
      console.log("data appended");
    }
  });
}

if (process.argv[2] == "delete") {
  fs.rm(process.argv[3], (err) => {
    if (err) {
      console.log("file cannot be deleted");
    } else {
      console.log("file is deleted");
    }
  });
}

if (process.argv[2] == "create") {
  fs.writeFile(process.argv[3], "", (err) => {
    if (err) {
      console.log("file is not created");
    } else {
      console.log("file is created");
    }
  });
}

if (process.argv[2] == "rename") {
  fs.rename(process.argv[3], process.argv[4], (err) => {
    if (err) {
      console.log("cannot rename the file");
    } else {
      console.log("renamed the file");
    }
  });
}

if (process.argv[2] == "list") {
  fs.readdir(process.argv[3], (err, files) => {
    if (err) {
      console.log(err);
      console.log("cannot be listed");
    } else {
      files.forEach((file) => {
        console.log(file);
      });
    }
  });
}
