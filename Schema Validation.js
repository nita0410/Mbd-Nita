const database = 'UAS_MBD';
const collection = 'Validasi';


use(database);

db.createCollection(collection);

db.createCollection("produk", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "harga", "stok", "kategori"],
      properties: {
        nama: { bsonType: "string" },
        harga: { bsonType: "int", minimum: 1000 },
        stok: { bsonType: "int", minimum: 0 },
        kategori: { bsonType: "string" }
      }
    }
  }
});
