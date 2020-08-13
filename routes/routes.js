'use strict';

const { json } = require('body-parser');

module.exports = function(app) {
    let jsonMhs = require('../controllers/mahasiswa_controller');
    let jsonMatkul = require('../controllers/matakuliah_controller');

    app.route('/').get(jsonMhs.index);
    app.route('/mhs/tampil').get(jsonMhs.tampilSemuaMahasiswa);
    app.route('/mhs/tampilid/').get(jsonMhs.tampilBerdasarkanID);
    app.route('/mhs/tambah').post(jsonMhs.tambahDataMahasiswa);
    app.route('/mhs/ubah').put(jsonMhs.ubahDataMahasiswa);
    app.route('/mhs/hapus').delete(jsonMhs.hapusDataMahasiswa);

    // tabel mata kuliah
    app.route('/matkul/tampil').get(jsonMatkul.tampilMataKuliah);
}