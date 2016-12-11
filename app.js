var express = require('express');
var app = express();
const PORT = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/', function(req, res) {
	res.send('Hello Root');
});

app.get('/admin', function(req, res) {
	res.send('Hello admin');
});

app.listen(PORT, function(err) {
	console.log('Running server on port ' + PORT);
});