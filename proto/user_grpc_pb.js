// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_SalesUserApi_Empty(arg) {
  if (!(arg instanceof user_pb.Empty)) {
    throw new Error('Expected argument of type SalesUserApi.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SalesUserApi_Empty(buffer_arg) {
  return user_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SalesUserApi_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type SalesUserApi.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SalesUserApi_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SalesUserApi_UserEmailPassword(arg) {
  if (!(arg instanceof user_pb.UserEmailPassword)) {
    throw new Error('Expected argument of type SalesUserApi.UserEmailPassword');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SalesUserApi_UserEmailPassword(buffer_arg) {
  return user_pb.UserEmailPassword.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SalesUserApi_UserList(arg) {
  if (!(arg instanceof user_pb.UserList)) {
    throw new Error('Expected argument of type SalesUserApi.UserList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SalesUserApi_UserList(buffer_arg) {
  return user_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SalesUserApi_UserRequestId(arg) {
  if (!(arg instanceof user_pb.UserRequestId)) {
    throw new Error('Expected argument of type SalesUserApi.UserRequestId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SalesUserApi_UserRequestId(buffer_arg) {
  return user_pb.UserRequestId.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getAll: {
    path: '/SalesUserApi.UserService/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Empty,
    responseType: user_pb.UserList,
    requestSerialize: serialize_SalesUserApi_Empty,
    requestDeserialize: deserialize_SalesUserApi_Empty,
    responseSerialize: serialize_SalesUserApi_UserList,
    responseDeserialize: deserialize_SalesUserApi_UserList,
  },
  get: {
    path: '/SalesUserApi.UserService/Get',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserRequestId,
    responseType: user_pb.User,
    requestSerialize: serialize_SalesUserApi_UserRequestId,
    requestDeserialize: deserialize_SalesUserApi_UserRequestId,
    responseSerialize: serialize_SalesUserApi_User,
    responseDeserialize: deserialize_SalesUserApi_User,
  },
  findByEmailAndPassword: {
    path: '/SalesUserApi.UserService/FindByEmailAndPassword',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserEmailPassword,
    responseType: user_pb.User,
    requestSerialize: serialize_SalesUserApi_UserEmailPassword,
    requestDeserialize: deserialize_SalesUserApi_UserEmailPassword,
    responseSerialize: serialize_SalesUserApi_User,
    responseDeserialize: deserialize_SalesUserApi_User,
  },
  create: {
    path: '/SalesUserApi.UserService/Create',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_SalesUserApi_User,
    requestDeserialize: deserialize_SalesUserApi_User,
    responseSerialize: serialize_SalesUserApi_User,
    responseDeserialize: deserialize_SalesUserApi_User,
  },
  update: {
    path: '/SalesUserApi.UserService/Update',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_SalesUserApi_User,
    requestDeserialize: deserialize_SalesUserApi_User,
    responseSerialize: serialize_SalesUserApi_User,
    responseDeserialize: deserialize_SalesUserApi_User,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
