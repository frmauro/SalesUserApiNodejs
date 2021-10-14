module.exports = function(application) {

     application.get('/users', function(req, res){
         return application.controllers.userController.index(application, req, res);
     });

     application.post('/user', function(req, res){
        return application.controllers.userController.findByEmailAndPassword(application, req, res);
    });

    application.post('/create', function(req, res){
        return application.controllers.userController.create(application, req, res);
    });


    application.put('/user', function(req, res){
        return application.controllers.userController.update(application, req, res);
    });
}