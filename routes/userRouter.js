module.exports = function(application) {
     application.get('/', function(req, res){
         return application.controllers.userController.index(application, req, res);
     });

     application.post('/', function(req, res){
        return application.controllers.userController.create(application, req, res);
    });

}