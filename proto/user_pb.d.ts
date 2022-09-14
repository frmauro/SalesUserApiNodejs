// package: SalesUserApi
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getName(): string;
    setName(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getPassword(): string;
    setPassword(value: string): User;
    getToken(): string;
    setToken(value: string): User;
    getUsertype(): string;
    setUsertype(value: string): User;
    getStatus(): string;
    setStatus(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        name: string,
        email: string,
        password: string,
        token: string,
        usertype: string,
        status: string,
    }
}

export class UserEmailPassword extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): UserEmailPassword;
    getPassword(): string;
    setPassword(value: string): UserEmailPassword;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserEmailPassword.AsObject;
    static toObject(includeInstance: boolean, msg: UserEmailPassword): UserEmailPassword.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserEmailPassword, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserEmailPassword;
    static deserializeBinaryFromReader(message: UserEmailPassword, reader: jspb.BinaryReader): UserEmailPassword;
}

export namespace UserEmailPassword {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class UserList extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): UserList;
    addUsers(value?: User, index?: number): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserList.AsObject;
    static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserList;
    static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
    export type AsObject = {
        usersList: Array<User.AsObject>,
    }
}

export class UserRequestId extends jspb.Message { 
    getId(): string;
    setId(value: string): UserRequestId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRequestId.AsObject;
    static toObject(includeInstance: boolean, msg: UserRequestId): UserRequestId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserRequestId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRequestId;
    static deserializeBinaryFromReader(message: UserRequestId, reader: jspb.BinaryReader): UserRequestId;
}

export namespace UserRequestId {
    export type AsObject = {
        id: string,
    }
}
