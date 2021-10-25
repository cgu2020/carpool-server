import admin from "firebase-admin"

export type Ride = {
  id: string,
  from: string,
  to: string,
  departureMonth: number,
  departureDay: number,
  description: string,
  user_id: string,
  name: string
}

export type user = {
  id: string, 
  name: string,
  email: string,
  phoneNumber: string
}

export type request = {
  user: user,
  time: number
}