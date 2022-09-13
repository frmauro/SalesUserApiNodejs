import { Router } from 'express';
import userController from '../controllers/userController';

const autenticateRouter = Router();

autenticateRouter.post('/', async (req, res) => {
    const result = await userController.findByEmailAndPassword(req, res);
    return res.status(200).json(result);
 });

 export default autenticateRouter;
