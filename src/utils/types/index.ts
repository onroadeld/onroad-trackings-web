export type LocationType = {
	latitude: number
	longitude: number
	driverLocationDescription: string
}

export type TripHistoryType = {
	date: string
	endDate: string
	status: 'START' | 'STOPPED' | 'END'
	address: LocationType
	duration: number
	totalEngineMiles: number
}

export type TrackingType = {
	driverId: number
	companyName: string
	truckNumber: string
	currentLocation: LocationType
	destination: LocationType | null
	destinationETA: number
	showDestination: boolean
	timeZone: string
	currentTime: string
	tripHistory: TripHistoryType[]
	degree: number
	speed: number
}
