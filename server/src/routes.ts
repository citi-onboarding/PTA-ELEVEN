import express from 'express';
import UserController from '@controllers/UserController'
import CardController from '@controllers/CardController';

const routes = express.Router();
const userController = new UserController();
const cardController = new CardController();
//users
routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

//cards
routes.post('/card', cardController.create);
routes.get('/card', cardController.get);
routes.put('/card/:id', cardController.update);
routes.delete('/card/:id', cardController.delete);


export default routes;