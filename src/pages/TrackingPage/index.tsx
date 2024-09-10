import { getTrackingRequest } from '@/api'
import { Header } from '@/components/Header'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Map } from '@/components/Map'
import { FC } from 'react'
import { useQuery } from 'react-query'

import { useSearchParams } from 'react-router-dom'

const TrackingPage: FC = () => {
	const [searchParams] = useSearchParams()
	const token = searchParams.get('token') || ''

	const { data, isLoading } = useQuery(
		['trackings'],
		() => getTrackingRequest(token),
		{
			enabled: !!token,
		},
	)

	console.log(data)

	if (!token) {
		return (
			<div className='h-full w-full grid place-items-center '>
				<span className='text-6xl font-semibold'>No trackings</span>
			</div>
		)
	}

	if (isLoading) {
		return <LoadingSpinner />
	}

	return (
		<div className='h-full w-full flex flex-col'>
			<Header />
			<div className='flex-1 h-full w-full flex py-4 px-6'>
				<div className='flex-[1] w-full'>Data deploy</div>
				<div className='flex-[2] w-full'>
					<Map />
				</div>
			</div>
		</div>
	)
}

export default TrackingPage
