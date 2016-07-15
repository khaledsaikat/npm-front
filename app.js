var express = require('express'),
    app = express();

app.use(express.static('build'))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/css'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
