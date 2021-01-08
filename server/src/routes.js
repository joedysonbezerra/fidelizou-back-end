import { Router } from 'express';
import UsersController from './app/controllers/UsersController';

const routes = Router();

routes.get('/', (req, res) => res.send('Server is working !'));
routes.post('/users', UsersController.store);
routes.get('/users', UsersController.index);
routes.get('/share/:id', UsersController.update);

export default routes;
