const http = require('http');
const fs = require('fs');
var date=new Date();
var txt=date.toLocaleTimeString();
var time=date.toLocaleTimeString()
time=time.replace(/:/g, " ");
var filename=date.toDateString()+"-"+time;
console.log(filename)
var fileslist="Current directory filenames:<br>"
fs.writeFile(`${filename}.txt`, `${txt}`, function (err) {
    if (err) throw err;
    console.log('Saved!');
    fs.readdir(".", (err, files) => { 
      if (err) 
        console.log(err); 
      else { 
        console.log("Current directory filenames:<br>"); 
        files.forEach(file => { 
          fileslist+=file+"<br>"
        })
      }
    }); 

  });

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`File "${filename}.txt" got created`+`<br>${fileslist}`);
    res.end();
  }).listen(process.env.PORT || 8080);