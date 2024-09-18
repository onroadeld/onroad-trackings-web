import { InMotionIcon } from '@/assets/icons'
import * as L from 'leaflet'

const CURRENT_LOCATION_ICON_SIZE = 26

export const getCurrentLocationIcon = (degree: number): L.DivIcon => {
	return L.divIcon({
		iconSize: [CURRENT_LOCATION_ICON_SIZE, CURRENT_LOCATION_ICON_SIZE],
		iconAnchor: [
			CURRENT_LOCATION_ICON_SIZE / 2,
			CURRENT_LOCATION_ICON_SIZE / 2,
		],
		className: 'my-marker',
		html: `<img alt='marker' src='${InMotionIcon}' class="object-contain w-full h-full cursor-pointer drop-shadow-lg" style="transform: rotate(${degree}deg)" />`,
	})
}
