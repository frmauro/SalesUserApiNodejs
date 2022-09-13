import { Router } from 'express';
import autenticateRouter from './autenticateRouter';
import testrouter from './testRouter';
import userrouter from './userRouter';

const routes = Router();


routes.use('/test', testrouter);
routes.use('/users', userrouter);
routes.use('/autenticate', autenticateRouter);

export default routes;