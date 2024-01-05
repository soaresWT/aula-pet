import express from 'express';
import { createNewUser, findAllUsers } from '../controllers/userController.js';

const routesUser = express.Router();

routesUser.post("/user", createNewUser)
routesUser.get("/users", findAllUsers)

export default routesUser;