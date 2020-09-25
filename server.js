var app = require('./config/server');

var port = 8088;
app.listen(port, function() {
    console.log('O servidor HTTP esta escutando a porta: ' + port);
});


