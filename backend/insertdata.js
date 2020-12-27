const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://dbuser:dbuser@cluster0.o8x9w.mongodb.net/DB?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("DB");
    const collection = database.collection("Library");
    // create a document to be inserted
    const doc = { word: "संस्कृत", split: ["सं","स्कृ","त"] };
    const result = await collection.insertOne(doc);
    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);