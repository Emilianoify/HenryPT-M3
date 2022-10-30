const fs = require("fs");

function date() {
   process.stdout.write(Date());
}

function pwd() {
   process.stdout.write(process.cwd());
}

function ls() {
   fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
         process.stdout.write(file.toString() + "\n")
      })
   })
}

function echo(args) {
   process.stdout.write(args.join(" "));
}

function cat(arg) {
   fs.readFile(arg[0], function (err, file) {
      if (err) throw err;
      process.stdout.write(file);
   })
}

function head(arg) {
   fs.readFile(arg[0], "utf-8", function (err, data) {
      if (err) throw err;
      const firstLines = data.split("\n").slice(0, 10).join("\n");
      process.stdout.write(firstLines);
   })
}

function tail(arg) {
   fs.readFile(arg[0], "utf-8", function (err, data) {
      if (err) throw err;
      const lastLines = data.split("\n").slice(-10).join("\n");
      process.stdout.write(lastLines);
   })
}

module.exports = {
   date,
   pwd,
   ls,
   echo,
   cat,
   head,
   tail
}