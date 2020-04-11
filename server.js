const express = require('express');

// Constants
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '0.0.0.0';

// App
const app = express();

app.get('/', function(req, res){
    res.send({status: "ok"});
});

app.use(express.static('public'));

const server = app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
