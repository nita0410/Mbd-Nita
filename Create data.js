const database = 'UAS';
const collection = 'NITA';


use(database);

db.createCollection(collection);


db[collection].insertMany([
  { nama: "Anggrek", harga: 35000, stok: 30, kategori: "Bunga Hias" },
  { nama: "Tulip", harga: 45000, stok: 25, kategori: "Bunga Impor" }
]);

// db[collection].find();
