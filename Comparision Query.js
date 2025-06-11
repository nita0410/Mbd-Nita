const database = 'UAS';
const collection = 'NITA';


use(database);

db.createCollection(collection);

db[collection].find({ harga: { $gt: 30000 } });
