import admin from 'firebase-admin';
import express from "express";
import {getRides, createRides} from "./endpoints/rides/ride_endpoints";
import bodyParser from 'body-parser';

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = express();

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 

const serviceAccount = require("./servicekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const port = process.env.PORT || 3000;

export const rides = db.collection('rides');
export const users = db.collection('users');

app.get('/rides', jsonParser, async (req, res) => {
  getRides(req, res);
});

app.post('/createRide', jsonParser, async (req, res) => {
  createRides(req, res);
});

app.listen(port, () => {
  console.log(`carpool server listening on port ${port}`);
});


