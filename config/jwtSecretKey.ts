
class JwtSecretKey{
    secret: string = "worldisfullofdevelopers";

    constructor(){ }

    get getSecretKey(){
        return this.secret;
    }

}

export default JwtSecretKey;

// module.exports = {
//     secret: 'worldisfullofdevelopers'
// };