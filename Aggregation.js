const database = 'UAS';
const collection = 'NITA';


use(database);

db.createCollection(collection);

db[collection].aggregate([
  { $group: { _id: "$kategori", totalStok: { $sum: "$stok" } } }
]);
