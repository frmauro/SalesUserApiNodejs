
class User {
      id: string;
      name: String;
      email: String;
      password: String;
      token: String;
      userType:  String;
      status: String;

      constructor(pId: string, pName: String, pEmail: String, pPassword: String, pToken: String, pUserType: String, pStatus: String){
        this.id = pId;
        this.name = pName;
        this.email = pEmail;
        this.password = pPassword;
        this.token = pToken;
        this.userType = pUserType;
        this.status = pStatus;
      }
}

export default User;

