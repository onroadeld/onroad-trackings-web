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
	driverName: string
	coDriverName: string
	truckNumber: string
	trailer: string
	shippingDocumentNumber: string
	currentLocation: LocationType
	timeZone: string
	currentTime: string
	tripHistory: TripHistoryType[]
}
