import { TrackingType } from '@/utils/types'
import { FC, useState } from 'react'
import { ItemTrackingDetail } from './ItemTrackingDetail'
import { calculateDuration, parseDate } from './utils'
import { RefreshIcon } from '@/assets/icons'
import { useQueryClient } from 'react-query'
import clsx from 'clsx'

type Props = TrackingType

export const TrackingDetails: FC<Props> = (props) => {
	const queryClient = useQueryClient()

	const [spin, setSpin] = useState(false)

	const handleRefresh = () => {
		setSpin(true)
		queryClient.refetchQueries(['trackings'])
		setTimeout(() => setSpin(false), 1000)
	}

	const {
		companyName,
		truckNumber,
		currentLocation,
		currentTime,
		timeZone,
		showDestination,
		destination,
		destinationETA,
	} = props

	const { driverLocationDescription } = currentLocation || {}
	const { driverLocationDescription: destinationLocationDescription = '' } =
		destination || {}
	const dateTime = parseDate(currentTime, timeZone)
	const eta = calculateDuration(destinationETA || 0)

	return (
		<div className='w-full max-md:flex-none relative'>
			<div className='flex items-center justify-between'>
				<h1 className='text-2xl font-semibold uppercase max-sm:text-lg'>
					{companyName}
				</h1>
				<div className='tooltip' data-tip='Refresh'>
					<button
						className={clsx({
							['animate-spin-fast']: spin,
							['btn btn-ghost btn-circle']: true,
						})}
						onClick={handleRefresh}
					>
						<RefreshIcon />
					</button>
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				<ItemTrackingDetail title='Truck number' value={truckNumber} />
				<ItemTrackingDetail
					title='Current location'
					value={driverLocationDescription}
				/>
				<ItemTrackingDetail title='Time' value={dateTime} />
				{showDestination && (
					<ItemTrackingDetail
						title='Destination'
						value={destinationLocationDescription}
					/>
				)}
				{showDestination && (
					<ItemTrackingDetail title='ETA' value={eta} />
				)}
			</div>
		</div>
	)
}
