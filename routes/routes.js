'use strict';

module.exports = function(app) {
    var jsonku = require('../controllers/controller');

    app.route('/').get(jsonku.index);
    app.route('/tampil').get(jsonku.tampilSemuaMahasiswa);
    app.route('/tampilid/').get(jsonku.tampilBerdasarkanID);
    app.route('/tambah').post(jsonku.tambahDataMahasiswa);
    app.route('/ubah').put(jsonku.ubahDataMahasiswa);
    app.route('/hapus').delete(jsonku.hapusDataMahasiswa);
}