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

// tampilkan matakuliah berdasarkan id
exports.tampilMataKuliahID = function(req, res) {
    let id_matakuliah = req.body.id_matakuliah;
    connection.query("SELECT * FROM matakuliah WHERE id_matakuliah = ?", [id_matakuliah], function(error, rows, fields) {
        if(error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    })
}

// tambahkan matakuliah
exports.tambahMataKuliah = function(req, res) {
    let nama_matkul = req.body.nama_matkul;
    let sks = req.body.sks;

    connection.query("INSERT INTO matakuliah (nama_matkul, sks) VALUES (?, ?)", [nama_matkul, sks], function(error, rows, fields) {
        if(error) {
            console.log(error);
        } else {
            response.ok("data berhasil ditambahkan", res);
        }
    })
}

// hapus data matakuliah by id
exports.hapusMatakuliah = function(req, res) {
    let id_matakuliah = req.body.id_matakuliah;

    connection.query("DELETE FROM matakuliah WHERE id_matakuliah = ?", [id_matakuliah], function(error, rows, fields) {
        if(error) {
            console.log(error);
        } else {
            response.ok("data berhasil dihapus", res);
        }
    })
}

// edit data matakuliah
exports.editMatakuliah = function(req, res) {
    let id_matakuliah = req.body.id_matakuliah;
    let nama_matkul = req.body.nama_matkul;
    let sks = req.body.sks;

    connection.query("UPDATE matakuliah SET nama_matkul = ?, sks = ? WHERE id_matakuliah = ?", [nama_matkul, sks, id_matakuliah], function(error, rows, fields) {
        if(error) {
            console.log(error);
        } else {
            response.ok("data berhasil di update", res);
        }
    })
}