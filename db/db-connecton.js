const mysql = require('mysql2');

let connection;

function getConnecton() {

    if(!connection){
        connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'asmil',
        database: 'apwd'
        })

    }

    return connection;
}

module.exports = getConnecton();
