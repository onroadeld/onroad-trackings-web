import { FC } from 'react'

type Props = {
	title: string
	value: string
}

export const ItemTrackingDetail: FC<Props> = ({ title, value }) => {
	return (
		<div className='flex flex-col gap-1'>
			<span className='font-medium text-[15px]'>{title}:</span>
			<span className='font-semibold text-base'>{value}</span>
		</div>
	)
}
