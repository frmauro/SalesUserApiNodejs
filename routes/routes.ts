import { Router } from 'express';
import testrouter from './testRouter';

const routes = Router();


routes.use('/test', testrouter);

export default routes;