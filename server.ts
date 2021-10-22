import admin from 'firebase-admin';
import express from "express";
import {getRides, createRides} from "./endpoints/rides/ride_endpoints";

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = express();

const serviceAccount = require("servicekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const port = process.env.PORT || 3000;

export const rides = db.collection('rides');

app.post('/createRide', async (req, res) => {
  createRides(req, res);
});


