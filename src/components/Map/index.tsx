import { forwardRef } from 'react'
import { LatLngExpression, Map } from 'leaflet'
import {
	AttributionControl,
	MapContainer,
	Marker,
	TileLayer,
} from 'react-leaflet'
import { TrackingType } from '@/utils/types'
import 'leaflet/dist/leaflet.css'
import { getCurrentLocationIcon } from './utils'

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

type Props = TrackingType

export const TrackingMap = forwardRef<Map, Props>(
	({ currentLocation }, ref) => {
		const { latitude = 0, longitude = 0 } = currentLocation || {}

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
	},
)
