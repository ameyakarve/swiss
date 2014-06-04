var system = require('system');
var page = require('webpage').create();
var fs = require("fs");

var content = fs.read('./output.json');

console.log(content);

//console.log(system.args[1]);
page.viewportSize = { width: 1920, height: 1080 };
page.open("http://www.google.com", function start(status) {
  //console.log(contents);
  phantom.exit();
});
