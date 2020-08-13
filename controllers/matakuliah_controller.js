'use strict';

let response = require('../res/res');
let connection = require('../config/koneksi');

// tampilkan matakuliah
exports.tampilMataKuliah = function(req, res) {
    connection.query("SELECT * FROM matakuliah", function(error, rows, fields) {
        if(error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    })
}

