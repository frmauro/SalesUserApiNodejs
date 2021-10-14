module.exports = function(application) {
    application.get('/teste/', function(req, res){
        return res.json('TESTE');
    });
}