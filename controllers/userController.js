  module.exports.index = function(application, req, res){
    //var connection = application.config.dbConnection();

    return res.json("GET");
    //var noticiasModel = new app.app.models.noticiasModel(connection);
  
    //noticiasModel.getNoticias(function(error, result){
      //res.render("noticias/noticias", {noticias: result});
    //});
  }


  module.exports.create = function(application, req, res){
    //var connection = application.config.dbConnection();

    return res.json("POST");
    //var noticiasModel = new app.app.models.noticiasModel(connection);
  
    //noticiasModel.getNoticias(function(error, result){
      //res.render("noticias/noticias", {noticias: result});
    //});
  }
