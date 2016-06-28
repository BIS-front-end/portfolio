var express = require ('express');
var app = express();

app.get('/index.html', function (){
	console.log('получен','index.html');
     res.write('123');
     res.end();

});

app.listen(9999);