export type ride = {
  id: number,
  destination: string,
  departureMonth: number,
  departureDay: number,
  departureYear: number,
  return : returnRide,
  description: string,
  compensation: compensation

}

export type returnRide = {
  returnMonth: number,
  returnDay: number,
  returnYear: number,
}

export type compensation = {
  service: string,
  cash: number
}