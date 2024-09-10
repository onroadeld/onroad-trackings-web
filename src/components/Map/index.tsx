import { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const mapConfig = {
	base: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
}

export const Map: FC = () => {
	return (
		<MapContainer
			center={[51.505, -0.09]}
			zoom={13}
			className='h-full w-full'
			scrollWheelZoom={'center'}
		>
			<TileLayer url={mapConfig.base} />
			<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	)
}
