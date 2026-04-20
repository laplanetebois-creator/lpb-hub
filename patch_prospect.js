const fs = require("fs");
let h = fs.readFileSync("index.html", "utf8");
const start = h.indexOf("window.prospectView = function(idx) {");
const end = h.indexOf("\nwindow._prospectToPRM", start);
console.log("start:"+start+" end:"+end);
