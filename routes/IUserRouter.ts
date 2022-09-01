import { IUserController } from "../controllers/IUserController";

export interface IUserRouter{
   getUsers(): any 
   findByEmailAndPassword(): any 
   create(): void 
   update(): any 
   SetController(controller: IUserController): void
   SetRouter(router: IUserRouter): void
}