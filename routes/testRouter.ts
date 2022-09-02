import { Router } from 'express';

const router: Router = Router(); 

router.get('/test', (req, res) => {
   return res.send("test express router");
});

export { router }
// class TestRouter{
//     router: Router = Router()

//     public index(res: Response){
//         return res.json({
//             response: 'Hello World'
//           });
//     }

//     constructor(){
//         this.router.get('/test', this.index);
//     }

// }

// export default new TestRouter();


// module.exports = function(application) {
//     application.get('/teste/', function(req, res){
//         return res.json('TESTE');
//     });
// }