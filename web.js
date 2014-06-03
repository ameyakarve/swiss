var exec = require("child_process").exec;
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var file = require("fs");

app.use(logfmt.requestLogger());
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/webapp/dist'));
function dir_list(cb) {
  var sys = require('sys');
  var exec = require('child_process').exec
  child = exec('./phantomjs dumper.js',
      function (error, stdout, stderr) {
          console.log(stdout, stderr);
                // Always empty
          var result = JSON.parse(stdout);
          console.log(result.a);
          cb(result.string);
      }
  );
}

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/phantom', function(req, res){
  var obj = {a: 1, b: 2};
  var contents = file.writeFileSync("./output.json",JSON.stringify(obj));
  dir_list(function(dir_list_output) {
      res.send(dir_list_output);
  });
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});


