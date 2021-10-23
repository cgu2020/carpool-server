import { rides } from "../../server";
import { Ride} from '../../types';

export async function getRides(req, res) {
  const rideId = req.query.Id;
  
  const localRides: Ride[] = [];
  if (rideId === undefined) {
    const currentRides = await rides.doc("rides").listCollections();
    const collections = currentRides.map((collection) => collection.listDocuments());
    for (const collection of collections){
      for (const docRef of await collection){
        const ride : Ride = (await docRef.get()).data() as Ride;
        localRides.push(ride)
      }
    }

  } else {
    const desiredRide = (await rides.doc("rides").collection(rideId.toString()).get();
  }
  res.send({ success: true, data: localRides });
}

export async function createRides(req, res) {
  const ride: Ride = req.body;
  const rideId = ride.id;
  const dest = ride.destination;

  const rideIdCollection = rides.doc("rides").collection(rideId);
  const newRide = rideIdCollection.doc(dest);
  newRide.set(ride);
  res.send({ success: true, data: ride });
}