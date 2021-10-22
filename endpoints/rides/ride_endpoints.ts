import { rides } from "../../server";
import { ride, returnRide, compensation } from '../../types';

export async function getRides(req, res) {
  const rideId = req.query.Id;
  const localRides: ride[] = [];

  if (rideId === undefined) {
    const courseTypes = await rides.listCollections();

  } else {

  }
  res.send({ success: true, data: localRides });
}

export async function createRides(req, res) {
  
}