import { Router } from 'express';
import testrouter from './testRouter';
import userrouter from './userRouter';

const routes = Router();


routes.use('/test', testrouter);
routes.use('/users', userrouter);

export default routes;