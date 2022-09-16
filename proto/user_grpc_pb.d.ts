// package: SalesUserApi
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAll: IUserServiceService_IGetAll;
    get: IUserServiceService_IGet;
    findByEmailAndPassword: IUserServiceService_IFindByEmailAndPassword;
    create: IUserServiceService_ICreate;
    update: IUserServiceService_IUpdate;
}

interface IUserServiceService_IGetAll extends grpc.MethodDefinition<user_pb.Empty, user_pb.UserList> {
    path: "/SalesUserApi.UserService/GetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Empty>;
    requestDeserialize: grpc.deserialize<user_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.UserList>;
    responseDeserialize: grpc.deserialize<user_pb.UserList>;
}
interface IUserServiceService_IGet extends grpc.MethodDefinition<user_pb.UserRequestId, user_pb.User> {
    path: "/SalesUserApi.UserService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserRequestId>;
    requestDeserialize: grpc.deserialize<user_pb.UserRequestId>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_IFindByEmailAndPassword extends grpc.MethodDefinition<user_pb.UserEmailPassword, user_pb.User> {
    path: "/SalesUserApi.UserService/FindByEmailAndPassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserEmailPassword>;
    requestDeserialize: grpc.deserialize<user_pb.UserEmailPassword>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_ICreate extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/SalesUserApi.UserService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_IUpdate extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/SalesUserApi.UserService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    getAll: grpc.handleUnaryCall<user_pb.Empty, user_pb.UserList>;
    get: grpc.handleUnaryCall<user_pb.UserRequestId, user_pb.User>;
    findByEmailAndPassword: grpc.handleUnaryCall<user_pb.UserEmailPassword, user_pb.User>;
    create: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    update: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
}

export interface IUserServiceClient {
    getAll(request: user_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    getAll(request: user_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    getAll(request: user_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    get(request: user_pb.UserRequestId, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    get(request: user_pb.UserRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    get(request: user_pb.UserRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    findByEmailAndPassword(request: user_pb.UserEmailPassword, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    findByEmailAndPassword(request: user_pb.UserEmailPassword, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    findByEmailAndPassword(request: user_pb.UserEmailPassword, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    create(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    create(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    create(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    update(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    update(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    update(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAll(request: user_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    public getAll(request: user_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    public getAll(request: user_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.UserRequestId, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.UserRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.UserRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public findByEmailAndPassword(request: user_pb.UserEmailPassword, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public findByEmailAndPassword(request: user_pb.UserEmailPassword, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public findByEmailAndPassword(request: user_pb.UserEmailPassword, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}
