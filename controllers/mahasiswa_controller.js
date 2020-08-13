'use strict';

var response = require('../res/res');
var connection = require('../config/koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi rest api sudah berjalan", res);
};

// tampil data semua mahasiswa
exports.tampilSemuaMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    })
}

// tampil data mahasiswa berdasarkan ID
exports.tampilBerdasarkanID = function (req, res) {
    let id = req.body.id;
    connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    })
}

// tambah data mahasiswa
exports.tambahDataMahasiswa = function (req, res) {
    let nim = req.body.nim;
    let nama = req.body.nama;
    let prodi = req.body.prodi;

    connection.query('INSERT INTO mahasiswa (nim, nama, prodi) VALUES(?, ?, ?)', [nim, nama, prodi], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil menambahkan data", res);
        }
    });
}

// ubah data mahasiswa
exports.ubahDataMahasiswa = function (req, res) {
    let id = req.body.id;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let prodi = req.body.prodi;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, prodi=? WHERE id=?', [nim, nama, prodi, id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil mengubah data mahasiswa dengan id " + id, res);
        }
    });
}

// menghapus data mahasiswa
exports.hapusDataMahasiswa = function (req, res) {
    let id = req.body.id;

    connection.query('DELETE FROM mahasiswa WHERE id=?', [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil menghapus data mahasiswa dengan id " + id, res);
        }
    })
}