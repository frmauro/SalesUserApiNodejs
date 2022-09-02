import { Response, Router } from 'express';

class TestRouter{
    router = Router();

    constructor(){}

    initRoutes() {
        this.router.get('/teste/', (res: Response) => {
            return res.json('TESTE')
        })
    }
}

export default new TestRouter();


// module.exports = function(application) {
//     application.get('/teste/', function(req, res){
//         return res.json('TESTE');
//     });
// }