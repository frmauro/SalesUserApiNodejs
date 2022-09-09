import { Router } from 'express';

const testrouter = Router(); 

testrouter.get('/', (req, res) => {
   return res.json("TEST ROUTER EXPRESS WITH TYPE SCRIPT!!!!");
});

export default testrouter; 
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