import User from "../models/user";

export interface IUserController{
    index(): string
    findByEmailAndPassword(): string
    create(): void
    update(): User
    setRequest(request: any): void
    SetResponse(response: any): void
}