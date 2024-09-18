import { forwardRef } from 'react'
import { LatLngExpression, Map } from 'leaflet'
import {
	AttributionControl,
	MapContainer,
	Marker,
	TileLayer,
} from 'react-leaflet'
import { TrackingType } from '@/utils/types'
import { getCurrentLocationIcon } from './utils'
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'

type MapConfig = {
	base: string
	defaultPosition: LatLngExpression
	defaultZoom: number
}

const mapConfig: MapConfig = {
	base: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
	defaultPosition: [39.8283, -98.5795],
	defaultZoom: 4,
}

type Props = TrackingType & {
	map: Map | null
}

// const lineColor = '#3d8bfb'

export const TrackingMap = forwardRef<Map, Props>((props, ref) => {
	// const map = props.map
	const { latitude = 0, longitude = 0 } = props.currentLocation || {}
	// const tripHistory = props.tripHistory || []

	// const RoutingMachineRef = useRef<Routing.Control | null>(null)

	// const waypoints: L.LatLngExpression[] = [
	// 	...tripHistory,
	// 	{
	// 		date: '',
	// 		endDate: '',
	// 		status: 'START',
	// 		address: { latitude: 38.16342, longitude: -81.449036 },
	// 		duration: 0,
	// 		totalEngineMiles: 0,
	// 	},
	// ].map((item) => {
	// 	return [item.address.latitude, item.address.longitude]
	// })

	// useEffect(() => {
	// 	if (!map) return
	// 	const RoutingControl = Routing.control({
	// 		// createMarker: () => null,
	// 		// position: 'topleft',
	// 		// @ts-ignore
	// 		lineOptions: {
	// 			styles: [
	// 				{
	// 					color: lineColor,
	// 					weight: 3,
	// 				},
	// 			],
	// 		},
	// 		addWaypoints: false,
	// 		// draggableWaypoints: false,
	// 		// autoRoute: false,
	// 		// collapsible: false,
	// 		// collapseBtn: undefined,
	// 		// show: false,
	// 		// addWaypoints: false,
	// 		// routeWhileDragging: true,
	// 		// fitSelectedRoutes: true,
	// 		// showAlternatives: false,
	// 		// @ts-ignore
	// 		waypoints: waypoints,
	// 	})
	// 	RoutingControl.addTo(map)
	// 	RoutingMachineRef.current = RoutingControl

	// 	// return () => {
	// 	// 	map.removeControl(RoutingControl)
	// 	// }
	// }, [map, waypoints])

	// useEffect(() => {
	// 	if (!RoutingMachineRef.current) return
	// 	// @ts-ignore
	// 	// RoutingMachineRef.current?.setWaypoints()
	// }, [waypoints])

	return (
		<div className='flex-[2] w-full shadow-md'>
			<MapContainer
				className='h-full w-full'
				attributionControl={false}
				center={mapConfig.defaultPosition}
				zoom={mapConfig.defaultZoom}
				ref={ref}
			>
				<TileLayer url={mapConfig.base} />
				<AttributionControl prefix='OnRoad ELD Tracking' />
				<Marker
					position={[latitude, longitude]}
					icon={getCurrentLocationIcon(45)}
				/>
			</MapContainer>
		</div>
	)
})
