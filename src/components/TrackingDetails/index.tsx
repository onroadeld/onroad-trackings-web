import { TrackingType } from '@/utils/types'
import { FC, useState } from 'react'
import { ItemTrackingDetail } from './ItemTrackingDetail'
import { parseDate } from './utils'
import { ArrowIcon, RefreshIcon } from '@/assets/icons'
import { useQueryClient } from 'react-query'
import clsx from 'clsx'

type Props = TrackingType

export const TrackingDetails: FC<Props> = (props) => {
	const queryClient = useQueryClient()

	const [spin, setSpin] = useState(false)
	const [expanded, setExpanded] = useState(false)

	const handleRefresh = () => {
		setSpin(true)
		queryClient.refetchQueries(['trackings'])
		setTimeout(() => setSpin(false), 1000)
	}

	const handleExpand = () => {
		setExpanded((prev) => !prev)
	}

	const {
		companyName,
		driverName,
		coDriverName,
		truckNumber,
		trailer,
		shippingDocumentNumber,
		currentLocation,
		timeZone,
		currentTime,
	} = props

	const drivers = coDriverName ? `${driverName}, ${coDriverName}` : driverName
	const { driverLocationDescription } = currentLocation || {}
	const dateTime = parseDate(currentTime)

	return (
		<div className='flex-[1] w-full max-md:flex-none relative'>
			<div className='max-md:hidden'>
				<div className='flex gap-2 items-center justify-between mb-10'>
					<h1 className='text-[26px] font-semibold'>{companyName}</h1>

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
				<div className='flex flex-col gap-7'>
					<ItemTrackingDetail title='Drivers' value={drivers} />
					<ItemTrackingDetail
						title='Truck number'
						value={truckNumber}
					/>
					<ItemTrackingDetail title='Trailer' value={trailer} />
					<ItemTrackingDetail
						title='Shipping document'
						value={shippingDocumentNumber}
					/>
					<ItemTrackingDetail
						title='Current location'
						value={driverLocationDescription}
					/>
					<ItemTrackingDetail title='Time zone' value={timeZone} />
					<ItemTrackingDetail title='Time' value={dateTime} />
				</div>
			</div>

			<div className='md:hidden px-4 py-4 absolute z-[99999] bottom-0 bg-[#0a303f] w-full flex flex-col gap-3'>
				<div className='flex gap-2 items-center justify-between'>
					<h1 className='text-[18px] font-semibold'>{companyName}</h1>

					<div className='flex gap-2 items-center justify-between'>
						<div className='tooltip z-[9999]' data-tip='Refresh'>
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
						<div
							className='tooltip z-[9999]'
							data-tip={expanded ? 'Close' : 'Expand'}
						>
							<button
								className='btn btn-ghost btn-circle'
								onClick={handleExpand}
							>
								<ArrowIcon />
							</button>
						</div>
					</div>
				</div>
				<div
					className={clsx({
						['flex flex-col gap-4']: true,
						hidden: !expanded,
					})}
				>
					<ItemTrackingDetail title='Drivers' value={drivers} />
					<ItemTrackingDetail
						title='Truck number'
						value={truckNumber}
					/>
					<ItemTrackingDetail title='Trailer' value={trailer} />
					<ItemTrackingDetail
						title='Shipping document'
						value={shippingDocumentNumber}
					/>
					<ItemTrackingDetail
						title='Current location'
						value={driverLocationDescription}
					/>
					<ItemTrackingDetail title='Time zone' value={timeZone} />
					<ItemTrackingDetail title='Time' value={dateTime} />
				</div>
			</div>
		</div>
	)
}
