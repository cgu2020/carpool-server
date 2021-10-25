import { rides } from "../../server";
import { Ride } from '../../types';



export async function getRides(req, res) {
  const rideId = req.query.Id;
  
  const localRides: Ride[] = [];
  if (rideId === undefined) {
    const currentRides = await rides.listDocuments()
    for (const docRef of await currentRides){
      const ride : Ride = (await docRef.get()).data() as Ride;
      localRides.push(ride)
    }
  } else {
    
  }
  res.send({ success: true, data: localRides });
}

export async function createRides(req, res) {
  const ride: Ride = req.body;
  const newRide = rides.doc(ride.id);
  newRide.set(req.body);
  res.send({ success: true, data: ride });
}