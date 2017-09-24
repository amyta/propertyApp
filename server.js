//server.js (propertyApp/server.js)
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var mongodb = require('mongodb'),
mongoClient = mongodb.MongoClient,
ObjectID = mongodb.ObjectID, // Used in API endpoints
db; // We'll initialize connection below

app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);
app.use(cors()); // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use(express.static("www")); // Our Ionic app build is in the www folder (kept up-to-date by the Ionic CLI using 'ionic serve')

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://heroku_98pc9zck:jrqer2ulovk1334epv6jqgmskr@ds149134.mlab.com:49134/heroku_98pc9zck';

// Initialize database connection and then start the server.
mongoClient.connect(MONGODB_URI, function (err, database) {
	if (err) {
	process.exit(1);
}

db = database; // Our database object from mLab

console.log("Database connection ready");

// Initialize the app.
app.listen(app.get('port'), function () {
	console.log("You're a wizard, Harry. I'm a what? Yes, a wizard, on port", app.get('port'));
	});
});

// property API Routes Will Go Below

// GET: retrieve all properties
app.get("/api/properties", function (req, res) {
	db.collection("properties").find({}).toArray(function (err, docs) {
		if (err) {
			handleError(res, err.message, "Failed to get properties");
		} else {
			res.status(200).json(docs);
		}
	});
});

// POST: create a new property
app.post("/api/properties", function (req, res) {
	var property = {
		nickname: req.body.nickname,
		address: req.body.address,
		rent: req.body.rent,
		rentReminder: req.body.rentReminder,
		rentDueDate: req.body.rentDueDate
	}

	db.collection("properties").insertOne(property, function (err, doc) {
		if (err) {
			handleError(res, err.message, "Failed to add property");
		} else {
			res.status(201).json(doc.ops[0]);
		}
	});
});

/*
* Endpoint "/api/properties/:id"
*/

// GET: retrieve a property by id -- Note, not used on front-end
app.get("/api/properties/:id", function (req, res) {
	db.collection("properties").findOne({ _id: new ObjectID(req.params.id) }, function (err, doc) {
		if (err) {
			handleError(res, err.message, "Failed to get property by _id");
		} else {
			res.status(200).json(doc);
		}
	});
});

// PUT: update a property by id
app.put("/api/properties/:id", function (req, res) {
	var updateProperty = req.body;
	delete updateProperty._id;

	db.collection("properties").updateOne({ _id: new ObjectID(req.params.id) }, updateProperty, function (err, doc) {
		if (err) {
			handleError(res, err.message, "Failed to update property");
		} else {
			res.status(204).end();
		}
	});
});

// DELETE: delete a property by id
app.delete("/api/properties/:id", function (req, res) {
	db.collection("properties").deleteOne({ _id: new ObjectID(req.params.id) }, function (err, result) {
		if (err) {
			handleError(res, err.message, "Failed to delete property");
		} else {
			res.status(204).end();
		}
	});
});

// Error handler for the api
function handleError(res, reason, message, code) {
	console.log("API Error: " + reason);
	res.status(code || 500).json({ "Error": message });
}