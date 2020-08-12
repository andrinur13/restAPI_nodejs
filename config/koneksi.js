var mysql = require('mysql');
// buat koneksi ke database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    socketPath: '/opt/lampp/var/mysql/mysql.sock',
    database: 'db_express_mahasiswa'
});

conn.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Database terkoneksi`);
    }
});

module.exports = conn;