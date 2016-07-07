var fs = require('fs');
var express = require('express');
var app = express();

app.get('/*', function(req, res) {
	console.log ('получен запрос по адресу', req.url);
	var content = fs.readFileSync('build\index.html', {encoding:'utf8'});
	res.write(content);
	res.end();
});

app.listen(9999);