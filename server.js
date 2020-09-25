var app = require('./config/server');

//require('./routes/userRouter')(app);

var port = 8088;
app.listen(port, function() {
    console.log('O servidor HTTP esta escutando a porta: ' + port);
});


