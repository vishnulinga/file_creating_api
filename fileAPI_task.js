const http = require('http');
const fs = require('fs');
var date=new Date();
var txt=date.toLocaleTimeString();
var time=date.toLocaleTimeString()
time=time.replace(/:/g, " ");
var filename=date.toDateString()+"-"+time;
console.log(filename)

fs.writeFile(`${filename}.txt`, `${txt}`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`File "${filename}.txt" got created`);
    res.end();
  }).listen(process.env.PORT || 8080);