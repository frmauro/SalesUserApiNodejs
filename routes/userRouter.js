module.exports = function(application) {
    //application.get('/', application.controllers.userController.index(application, req, res));
     application.get('/', function(req, res){
         //return res.json('OK');
         return application.controllers.userController.index(application, req, res);
     });

     application.post('/', function(req, res){
        //return res.json('OK');
        return application.controllers.userController.create(application, req, res);
    });



}