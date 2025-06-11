const database = 'UAS';
const collection = 'NITA';


use(database);

db.createCollection(collection);

db[collection].find({
  $or: [
    { stok: { $gt: 20 } },
    { kategori: "Bunga Segar" }
  ]
});
