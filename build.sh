#!/bin/bash
# Build single HTML file from components using Node.js
node -e "
const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');
const js = fs.readFileSync('app.js', 'utf8');
const html = fs.readFileSync('index.html', 'utf8');
let output = html.replace('<link rel=\"stylesheet\" href=\"style.css\">', '<style>\n' + css + '\n  </style>');
output = output.replace('<script src=\"app.js\"></script>', '<script>\n' + js + '\n  </script>');
fs.writeFileSync('lpb-hub.html', output, 'utf8');
const size = fs.statSync('lpb-hub.html').size;
console.log('Built lpb-hub.html (' + (size / 1024).toFixed(0) + ' KB)');
"
