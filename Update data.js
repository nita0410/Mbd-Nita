const database = 'UAS';
const collection = 'NITA';


use(database);

db.createCollection(collection);

db[collection].updateOne(
  { nama: "Mawar Merah" },
  { $set: { harga: 27000 } }
);
