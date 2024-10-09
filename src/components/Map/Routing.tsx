import { FC, useEffect, useMemo, useRef } from 'react'
import * as L from 'leaflet'
import { LocationType } from '@/utils/types'
import { useMap } from 'react-leaflet'

type Props = {
	map?: L.Map
	destination: LocationType | null
}

export const Routing: FC<Props> = ({ destination }) => {
	const RoutingMachineRef = useRef<L.Routing.Control | null>(null)
	const parentMap = useMap()

	const waypoints = useMemo(() => {
		if (!destination) return [] as L.LatLng[]
		const {
			latitude: destinationLatitude = 0,
			longitude: destinationLongitude = 0,
		} = destination || {}
		return [L.latLng(destinationLatitude, destinationLongitude)]
	}, [destination])

	useEffect(() => {
		RoutingMachineRef.current = L.Routing.control({
			show: false,
			routeWhileDragging: false, //to set draggable option to false
			addWaypoints: false, //disable adding new waypoints to the existing path
			autoRoute: true,
		}).addTo(parentMap)

		// eslint-disable-next-line
		// @ts-ignore
		parentMap?._controlCorners?.topright?.lastElementChild?.remove()

		return () => {
			parentMap.removeControl(RoutingMachineRef.current!)
			RoutingMachineRef.current = null
		}
	}, [parentMap])

	useEffect(() => {
		if (RoutingMachineRef.current) {
			RoutingMachineRef.current.setWaypoints(waypoints)
		}
	}, [RoutingMachineRef, waypoints])

	return null
}
