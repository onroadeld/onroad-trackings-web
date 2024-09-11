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
	const [mapInstance, setMapInstance] = useState<Map | null>(null)

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
				<span className='text-6xl font-semibold'>No trackings</span>
			</div>
		)
	}

	if (isLoadingError || isError) {
		return (
			<div className='h-full w-full grid place-items-center'>
				<span className='text-6xl font-semibold'>
					Failed to get trackings
				</span>
			</div>
		)
	}

	return (
		<div className='h-full w-full flex py-4 gap-6 max-md:flex-col-reverse max-sm:gap-0 max-sm:py-0 '>
			<TrackingDetails {...data} />
			<TrackingMap {...data} ref={(node) => setMapInstance(node)} />
		</div>
	)
}

export default TrackingPage
