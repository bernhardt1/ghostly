/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {string}
*/

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let cache = null;


module.exports = (name = 'world', context, callback) => {
	let uri = process.env['MONGO_URI'];
	try {
		if (cache === null) {
			MongoClient.connect(uri,
				(error, db) => {
			    	if (error) {
			      		console.log(error['errors']);
			      		return callback(error);
			    	} else {
			    		console.log("No error")
			    	}
			    	cache = db;
			    	readAudio(db, callback);
		  		});
		} else {
		  readAudio(cache, callback);
		}
	} catch (error) {
		console.log(error);
		return callback(error);
	}
};


const readAudio = (db, callback) => {
	console.log(db)
  let cursor = db.collection('audio').find();
  let audios = [];
  cursor.each((error, item) => {
    console.log("iterating")
    if (error) {
      console.log(error);
    }
    console.log("1")
    if (item === null) {
    	console.log("2")
      return callback(null, audios);
    }
    console.log("3")
    audios.push({
      id: item._id,
      text: item.url,
      completed: item.loc
    });
  });
};
