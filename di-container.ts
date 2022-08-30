import { Container } from "inversify";
import TYPES from "./types";
import UserController from "./controllers/userController";
import { IUserController } from "./controllers/IUserController";

var container = new Container();
container.bind<IUserController>(TYPES.IUserController).to(UserController);

export default container;