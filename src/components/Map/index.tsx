import { Dispatch, forwardRef, SetStateAction } from 'react'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import {
	AttributionControl,
	MapContainer,
	Marker,
	TileLayer,
} from 'react-leaflet'

import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

import { TrackingType } from '@/utils/types'
import { getCurrentLocationIcon } from './utils'

import { Routing } from './Routing'

type MapConfig = {
	base: string
	defaultPosition: L.LatLngExpression
	defaultZoom: number
}

const mapConfig: MapConfig = {
	base: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	defaultPosition: [39.8283, -98.5795],
	defaultZoom: 4,
}

type Props = TrackingType & {
	map?: L.Map
	setMap: Dispatch<SetStateAction<L.Map | undefined>>
}

export const TrackingMap = forwardRef<L.Map, Props>(
	({
		currentLocation,
		degree = 45,
		truckNumber,
		destination,
		map,
		setMap,
	}) => {
		const { latitude = 0, longitude = 0 } = currentLocation || {}

		return (
			<div className='flex-[2] w-full shadow-md'>
				<MapContainer
					className='h-full w-full min-h-[500px]'
					attributionControl={false}
					center={mapConfig.defaultPosition}
					zoom={mapConfig.defaultZoom}
					// eslint-disable-next-line
					// @ts-ignore
					ref={setMap}
					worldCopyJump
				>
					<TileLayer url={mapConfig.base} />
					<AttributionControl prefix='OnRoad ELD Tracking' />
					<Marker
						position={[latitude, longitude]}
						icon={getCurrentLocationIcon(degree, truckNumber)}
					/>
					<Routing destination={destination} map={map} />
				</MapContainer>
			</div>
		)
	},
)
