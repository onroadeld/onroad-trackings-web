import * as L from 'leaflet'

const CURRENT_LOCATION_ICON_SIZE = 26

export const getCurrentLocationIcon = (
	degree: number,
	truckNumber: string,
): L.DivIcon => {
	return L.divIcon({
		iconSize: [CURRENT_LOCATION_ICON_SIZE, CURRENT_LOCATION_ICON_SIZE],
		iconAnchor: [
			CURRENT_LOCATION_ICON_SIZE / 2,
			CURRENT_LOCATION_ICON_SIZE / 2,
		],
		className: 'my-marker',
		html: `<div class="relative">
              	<div 
			  		class="bg-[#000000a5] text-white font-bold text-xs absolute px-[0.5rem] grid place-items-center" 
			  		style="top: -${CURRENT_LOCATION_ICON_SIZE / 1.5}px;
                	left: 50%;
                	transform: translateX(-50%);
                	border-radius: 0.25rem;">${truckNumber}</div>
              <img alt='marker' src='/in-motion-icon.svg' class="object-contain w-full h-full cursor-pointer drop-shadow-lg" style="transform: rotate(${degree}deg)" />
		  </div>`,
	})
}
