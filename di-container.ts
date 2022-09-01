import { Container } from "inversify";
import TYPES from "./types";
import UserController from "./controllers/userController";
import { IUserController } from "./controllers/IUserController";
import UserRouter from "./routes/userRouter";
import { IUserRouter } from "./routes/IUserRouter";

var container = new Container();
container.bind<IUserController>(TYPES.IUserController).to(UserController);
container.bind<IUserRouter>(TYPES.IUserRouter).to(UserRouter);

export default container;