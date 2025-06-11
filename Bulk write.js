const database = 'UAS';
const collection = 'NITA';


use(database);

db.createCollection(collection);

db[collection].bulkWrite([
  {
    insertOne: {
      document: { nama: "Lily", harga: 40000, stok: 15, kategori: "Bunga Segar" }
    }
  },
  {
    updateOne: {
      filter: { nama: "Anggrek" },
      update: { $set: { stok: 35 } }
    }
  },
  {
    deleteOne: {
      filter: { nama: "Tulip" }
    }
  }
]);
