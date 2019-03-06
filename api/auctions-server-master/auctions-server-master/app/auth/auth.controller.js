var AuthController = AuthController || {};

const ldap = require('../utils/ldap');
const tokenHandler = require('./token-handler');

let authUsers = require('../../users.json');

AuthController.authenticate = function(email, password) {
    return new Promise( (resolve, reject) => {
        if( !password ) return reject('Empty password');
        
        let user = authUsers.users.find( u => {
            return u.email == email;
        })
        if( user && user.email ) {
            if( user.password == password ) {
                var options = {
                    email: email
                }
                
                let tokens = tokenHandler.generateTokens(options);
                return resolve({
                    access_token: tokens[0],
                    refresh_token: tokens[1]
                }); 
            }
        }

        return ldap.authenticate(email, password).then( () => {
            var options = {
                email: email
            }

            let tokens = tokenHandler.generateTokens(options);
            return resolve({
                access_token: tokens[0],
                refresh_token: tokens[1]
            });
        }).catch(reject)
    });
}

AuthController.refresh = function(refresh_token) {
    return tokenHandler.generateAccessWithRefresh( refresh_token );
}

AuthController.verify = function( authorization ) {
    try {
        let authParts = authorization.split(' ');
        if( authParts[0] != 'Bearer' ) return false;
        if( !authParts[1] ) return false;

        return tokenHandler.validate(authParts[1]);
    } catch( e ) {
        return false;
    }
}
module.exports = AuthController;

