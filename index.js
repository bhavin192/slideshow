var io = require('socket.io').listen(8000);
var fs = require('fs');
var path = require("path");
var slidesObj = [];
var defaultDelay = 3; //sec
var slidesDir = "slides/";

function readImg() {
  var files = fs.readdirSync(slidesDir);
  slidesObj = [];
  files.forEach(function(file) {
    let fileStat = fs.statSync(slidesDir + file).isDirectory();
    if (!fileStat) {
      var extName = path.extname(file).toLowerCase();
      var hex = new Buffer(file).toString('hex');
      var key = hex;
      var data = {
        uri: file,
        uriKey: key
      };
      if (extName == ".png" || extName == ".jpg" || extName == ".jpeg" || extName == ".svg" || extName == ".bmp" || extName == ".gif") {
        slidesObj.push(data);
      }
    }
  });
}

io.sockets.on('connection', function(socket) {
  readImg();
  socket.emit("slideData", {
    "dataImg": slidesObj,
    "dir": slidesDir,
    "delay": defaultDelay
  });
});
