// CRUD

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "crud-api";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return console.log("Unable to connect to database");
    //  console.log('Connected Correctly!')

    const db = client.db(databaseName);
    // CREAT
    // Insert one document to post-collection.
    db.collection("posts").insertOne({
      title: "post-one",
      body: "this is body",
    }, (error, result) => {
      if(error) return console.log('unable to insert')
      console.log(result.ops)
    });
    // Insert many documents 
    db.collection('posts').insertMany(
      {
        title: 'title-one',
        body: 'boby-1'
    }, {
      title: 'title-two',
      body: 'boby-2'
    }, (error, result) => {
      if(error) return console.log('unable to insert')
      console.log(result.ops)    
    })
  // READ
  // Find one document
  db.collection('posts').findOne({ title: 'title-one' }, (error, post) => {
    if(error) return console.log('unable to find')

    console.log(post)
  })
  // Find many document
  db.collection('posts').find({ title: 'title-one' }).toArray((error, posts) => {
    if(error) return console.log('unable to find')

    console.log(posts)
  })
  // UPDATE
  // update one document
  db.collection('posts').updateOne(
    {
      _id: new ObjectID('60e222898974a408548aa9a2')
    },
    {
      $set: {
        body: 'updated-body'
      }
    }
  )
  .then((result) => {console.log(result)})
  .catch((err) => {console.log(err)})
  // update many documents
  db.collection('posts').updateMany({
    body: 'body-2'
  }, {
    $set:{
      body:"updated-body-2"
    }
  })
  .then((result) => {console.log(result)})
  .catch((err) => {console.log(err)})
  // DELETE
  delete one
  db.collection('posts').deleteMany({
    body:"updated-body-2"
  })
  .then((result) => {console.log(result)})
  .catch((err) => {console.log(err)})
  // delete many
  db.collection('posts').deleteMany({
    body: 'updated-body'
  })
  .then((result) => {console.log(result)})
  .catch((err) => {console.log(err)})
  }
);
