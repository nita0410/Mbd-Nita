const database = 'UAS';
const collection = 'NITA';


use(database);

db.createCollection(collection);

db.produk.find();
db.produk.find().pretty();
