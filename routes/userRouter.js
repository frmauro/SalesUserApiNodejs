module.exports = function(application) {

     application.get('/users', function(req, res){
         return application.controllers.userController.index(application, req, res);
     });

     application.post('/user', function(req, res){
        return application.controllers.userController.findByEmailAndPassword(application, req, res);
    });

    application.post('/', function(req, res){
        return application.controllers.userController.create(application, req, res);
    });


    application.put('/', function(req, res){
        return application.controllers.userController.update(application, req, res);
    });
}