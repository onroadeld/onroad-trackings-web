import { FC, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getTrackingRequest } from '@/api'
import { TrackingMap } from '@/components/Map'
import { TrackingDetails } from '@/components/TrackingDetails'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Map } from 'leaflet'

const TrackingPage: FC = () => {
	const [searchParams] = useSearchParams()
	const token = searchParams.get('token') || ''
	const [mapInstance, setMapInstance] = useState<Map>()

	const firstRenderRef = useRef(true)

	const { data, isLoading, isError, isLoadingError } = useQuery(
		['trackings'],
		() => getTrackingRequest(token),
		{
			enabled: !!token,
			onSuccess: () => {},
			refetchInterval: 15000,
		},
	)
	useEffect(() => {
		if (mapInstance && firstRenderRef.current && data) {
			const { latitude, longitude } = data.currentLocation
			mapInstance.setView([latitude, longitude], 13)
			firstRenderRef.current = false
		}
	}, [mapInstance, data])

	if (isLoading) {
		return <LoadingSpinner />
	}

	if (!token || !data) {
		return (
			<div className='h-full w-full grid place-items-center'>
				<span className='text-6xl font-semibold max-sm:text-4xl'>
					No trackings
				</span>
			</div>
		)
	}

	if (isLoadingError || isError) {
		return (
			<div className='h-full w-full grid place-items-center'>
				<span className='text-6xl font-semibold max-sm:text-4xl'>
					Failed to get trackings
				</span>
			</div>
		)
	}

	return (
		<div className='h-full w-full flex flex-col gap-6 max-sm:gap-4'>
			<TrackingDetails {...data} />
			<TrackingMap
				{...data}
				// ref={(node) => setMapInstance(node)}
				setMap={setMapInstance}
				map={mapInstance}
			/>
		</div>
	)
}

export default TrackingPage
